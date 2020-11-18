using Microsoft.AspNetCore.Mvc;
using Parkdepot.Models.DB;
using Parkdepot.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parkdepot.Controllers
{
    [Route("api/parkingRestriction")]
    public class ParkingRestrictionController : ControllerBase
    {

        private ParkingRestrictionService parkingRestrictionService;

        public ParkingRestrictionController()
        {
            this.parkingRestrictionService = new ParkingRestrictionService();
        }

        [HttpGet("get-parking-restrictions")]
        public IActionResult getParkingRestrictionLst()
        {
            List<ParkingRestriction> lstParkingRestriction = parkingRestrictionService.getParkingRestrictionLst();
            return Ok(lstParkingRestriction);
        }
    }
}
