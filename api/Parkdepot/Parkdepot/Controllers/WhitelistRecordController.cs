using Microsoft.AspNetCore.Mvc;
using Parkdepot.Models.DB;
using Parkdepot.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parkdepot.Controllers
{
    [Route("api/whitelist")]
    [ApiController]
    public class WhitelistRecordController : ControllerBase
    {

        private WhitelistRecordService whitelistService;

        public WhitelistRecordController()
        {
            this.whitelistService = new WhitelistRecordService();
        }

        [HttpGet("get-whitelist")]
        public IActionResult getWhitelist()
        {
            List<WhitelistRecord> whitelist = whitelistService.getWhitelist();
            return Ok(whitelist);
        }

        [HttpPost("new-whitelist-record")]
        public IActionResult addWhitelistRecord([FromBody] WhitelistRecord whitelistRecord)
        {
            whitelistService.addWhitelistRecord(whitelistRecord);
            return Ok();
        }

        [HttpPut("update-record")]
        public IActionResult updateWhitelistRecord([FromBody] WhitelistRecord whitelistRecord)
        {
            whitelistService.updateWhitelistRecord(whitelistRecord);
            return Ok();
        }

        [HttpPost("delete-record")]
        public IActionResult removeWhitelistRecord([FromBody] WhitelistRecord whitelistRecord)
        {
            whitelistService.removeRecord(whitelistRecord);
            return Ok();
        }
    }
}
