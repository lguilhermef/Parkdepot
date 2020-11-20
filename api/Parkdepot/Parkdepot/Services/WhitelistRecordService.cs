using Parkdepot.Models.DAL;
using Parkdepot.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parkdepot.Services
{
    public class WhitelistRecordService
    {
        private WhitelistRecordRepository _whitelistRepository;
        private const String DEFAULT_RESTRICTION_NAME = "Default";

        public WhitelistRecordService ()
        {
            this._whitelistRepository = new WhitelistRecordRepository();
        }

        public List<WhitelistRecord> getWhitelist ()
        {
            return _whitelistRepository.getWhitelist();
        } 

        public void addWhitelistRecord (WhitelistRecord whitelistRecord)
        {
            if (whitelistRecord.ParkingRestrictionName == null || whitelistRecord.ParkingRestrictionName == "")
            {
                whitelistRecord.ParkingRestrictionName = DEFAULT_RESTRICTION_NAME;
            }

            _whitelistRepository.addWhitelistRecord(whitelistRecord);
        }
        public void updateWhitelistRecord(WhitelistRecord whitelistRecord)
        {
            _whitelistRepository.updateWhitelistRecord(whitelistRecord);
        } 

        public void removeRecord(WhitelistRecord whitelistRecord)
        {
            _whitelistRepository.removeRecord(whitelistRecord);
        }
    }
}
