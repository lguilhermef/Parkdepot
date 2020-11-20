using System;
using System.Collections.Generic;

namespace Parkdepot.Models.DB
{
    public partial class WhitelistRecord
    {
        public int Id { get; set; }
        public string PlateLicense { get; set; }
        public string ParkingRestrictionName { get; set; }
        public string PlateOwner { get; set; }

        public ParkingRestriction ParkingRestrictionNameNavigation { get; set; }
    }
}
