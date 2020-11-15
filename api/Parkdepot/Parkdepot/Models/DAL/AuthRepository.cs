using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Parkdepot.Models.DB;

namespace Parkdepot.Models.DAL
{
    public class AuthRepository
    {
        private ParkdepotDbContext dbContext;

        public AuthRepository()
        {
            this.dbContext = new ParkdepotDbContext();
        }

        public ParkdepotUser getUser(string email)
        {
            return dbContext.ParkdepotUser.Where(u => u.Email == email).FirstOrDefault();
        }

        public ParkdepotUser registerUser(ParkdepotUser newUser)
        {
            dbContext.Add(newUser);
            dbContext.SaveChanges();

            return getUser(newUser.Email);
        }
    }
}
