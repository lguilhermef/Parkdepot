dotnet ef dbcontext scaffold "Server=tcp:parkdepot.database.windows.net;Database=Parkdepot;User ID=misterQuintais;Password=Parkchallenge2020;" Microsoft.EntityFrameworkCore.SqlServer -c ParkdepotDbContext -f -o Models\DB

pause