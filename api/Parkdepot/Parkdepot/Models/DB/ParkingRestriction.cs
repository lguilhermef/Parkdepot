using System;
using System.Collections.Generic;

namespace Parkdepot.Models.DB
{
    public partial class ParkingRestriction
    {
        public ParkingRestriction()
        {
            WhitelistRecord = new HashSet<WhitelistRecord>();
        }

        public string RestrName { get; set; }
        public int MaxParkingTime { get; set; }

        public ICollection<WhitelistRecord> WhitelistRecord { get; set; }
    }
}
