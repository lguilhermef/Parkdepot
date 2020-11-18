using Parkdepot.Models.DAL;
using Parkdepot.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parkdepot.Services
{
    public class ParkingRestrictionService
    {
        private ParkingRestrictionRepository _parkingRestricitonRepositry;

        public ParkingRestrictionService()
        {
            this._parkingRestricitonRepositry = new ParkingRestrictionRepository();
        }

        public List<ParkingRestriction> getParkingRestrictionLst()
        {
            return _parkingRestricitonRepositry.getParkingRestrictionLst();
        }
    }
}
