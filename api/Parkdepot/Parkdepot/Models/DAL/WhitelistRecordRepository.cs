using Parkdepot.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parkdepot.Models.DAL
{
    public class WhitelistRecordRepository
    {

        private ParkdepotDbContext dbContext;

        public WhitelistRecordRepository ()
        {
            this.dbContext = new ParkdepotDbContext();
        }

        public List<WhitelistRecord> getWhitelist()
        {
            return dbContext.WhitelistRecord.ToList();
        }

        public void addWhitelistRecord(WhitelistRecord whitelistRecord)
        {
            dbContext.WhitelistRecord.Add(whitelistRecord);
            dbContext.SaveChanges();
        }
    }
}
