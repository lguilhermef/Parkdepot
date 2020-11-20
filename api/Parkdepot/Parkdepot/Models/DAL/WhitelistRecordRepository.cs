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


        public WhitelistRecord getRecordByPlateLicense(int whitelistRecordId)
        {
            return dbContext.WhitelistRecord.Where(r => r.Id == whitelistRecordId).FirstOrDefault();
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

        public void updateWhitelistRecord (WhitelistRecord whitelistRecord)
        {
            dbContext.Update(whitelistRecord);
            dbContext.SaveChanges();
        }

        public void removeRecord(WhitelistRecord whitelistRecord)
        {
            dbContext.Remove(whitelistRecord);
            dbContext.SaveChanges();
        }
    }
}
