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
    }
}
