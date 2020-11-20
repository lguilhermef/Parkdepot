using System;
using System.Collections.Generic;

namespace Parkdepot.Models.DB
{
    public partial class ParkdepotUser
    {
        public string Email { get; set; }
        public string Pass { get; set; }
        public string Username { get; set; }
        public string Permission { get; set; }
        public string LandingPage { get; set; }

        public UserPermission PermissionNavigation { get; set; }
    }
}
