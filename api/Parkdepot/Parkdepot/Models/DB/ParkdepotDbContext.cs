using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace Parkdepot.Models.DB
{
    public partial class ParkdepotDbContext : DbContext
    {
        public ParkdepotDbContext()
        {
        }

        public ParkdepotDbContext(DbContextOptions<ParkdepotDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ParkdepotUser> ParkdepotUser { get; set; }
        public virtual DbSet<ParkingRestriction> ParkingRestriction { get; set; }
        public virtual DbSet<UserPermission> UserPermission { get; set; }
        public virtual DbSet<WhitelistRecord> WhitelistRecord { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                .AddJsonFile("appsettings.json")
                .Build();

            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ParkdepotUser>(entity =>
            {
                entity.HasKey(e => e.Email);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(100)
                    .ValueGeneratedNever();

                entity.Property(e => e.Pass)
                    .IsRequired()
                    .HasColumnName("pass");

                entity.Property(e => e.Permission)
                    .HasColumnName("permission")
                    .HasMaxLength(5);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(50);

                entity.HasOne(d => d.PermissionNavigation)
                    .WithMany(p => p.ParkdepotUser)
                    .HasForeignKey(d => d.Permission)
                    .HasConstraintName("FK__Parkdepot__permi__619B8048");
            });

            modelBuilder.Entity<ParkingRestriction>(entity =>
            {
                entity.HasKey(e => e.RestrName);

                entity.Property(e => e.RestrName)
                    .HasColumnName("restr_name")
                    .HasMaxLength(20)
                    .ValueGeneratedNever();

                entity.Property(e => e.MaxParkingTime).HasColumnName("max_parking_time");
            });

            modelBuilder.Entity<UserPermission>(entity =>
            {
                entity.HasKey(e => e.PermName);

                entity.Property(e => e.PermName)
                    .HasColumnName("perm_name")
                    .HasMaxLength(5)
                    .ValueGeneratedNever();

                entity.Property(e => e.PermDescription)
                    .HasColumnName("perm_description")
                    .HasMaxLength(100);

                entity.Property(e => e.PermLevel).HasColumnName("perm_level");
            });

            modelBuilder.Entity<WhitelistRecord>(entity =>
            {
                entity.HasKey(e => e.PlateLicense);

                entity.Property(e => e.PlateLicense)
                    .HasColumnName("plate_license")
                    .HasMaxLength(20)
                    .ValueGeneratedNever();

                entity.Property(e => e.ParkingRestrictionName)
                    .HasColumnName("parking_restriction_name")
                    .HasMaxLength(20);

                entity.Property(e => e.PlateOwner)
                    .IsRequired()
                    .HasColumnName("plate_owner")
                    .HasMaxLength(100);

                entity.HasOne(d => d.ParkingRestrictionNameNavigation)
                    .WithMany(p => p.WhitelistRecord)
                    .HasForeignKey(d => d.ParkingRestrictionName)
                    .HasConstraintName("FK__Whitelist__parki__6C190EBB");
            });
        }
    }
}
