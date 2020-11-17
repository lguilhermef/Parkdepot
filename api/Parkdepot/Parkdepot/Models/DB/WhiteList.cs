using System;
using System.Collections.Generic;

namespace Parkdepot.Models.DB
{
    public partial class WhiteList
    {
        public string PlateLicense { get; set; }
        public string ParkingRestrictionName { get; set; }
        public string PlateOwner { get; set; }

        public ParkingRestriction ParkingRestrictionNameNavigation { get; set; }
    }
}
