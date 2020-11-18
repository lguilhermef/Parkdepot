using Parkdepot.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parkdepot.Models.DAL
{
    public class ParkingRestrictionRepository
    {

        private ParkdepotDbContext dbContext;

        public ParkingRestrictionRepository()
        {
            this.dbContext = new ParkdepotDbContext();
        }

        public List<ParkingRestriction> getParkingRestrictionLst()
        {
            return dbContext.ParkingRestriction.ToList();
        }
    }
}
