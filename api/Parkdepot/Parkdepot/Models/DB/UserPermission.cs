using System;
using System.Collections.Generic;

namespace Parkdepot.Models.DB
{
    public partial class UserPermission
    {
        public UserPermission()
        {
            ParkdepotUser = new HashSet<ParkdepotUser>();
        }

        public string PermName { get; set; }
        public string PermDescription { get; set; }
        public int PermLevel { get; set; }

        public ICollection<ParkdepotUser> ParkdepotUser { get; set; }
    }
}
