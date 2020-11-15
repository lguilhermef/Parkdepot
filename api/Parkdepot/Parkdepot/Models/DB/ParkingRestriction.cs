using System;
using System.Collections.Generic;

namespace Parkdepot.Models.DB
{
    public partial class ParkingRestriction
    {
        public ParkingRestriction()
        {
            WhiteList = new HashSet<WhiteList>();
        }

        public string RestrName { get; set; }
        public int MaxParkingTime { get; set; }

        public ICollection<WhiteList> WhiteList { get; set; }
    }
}
