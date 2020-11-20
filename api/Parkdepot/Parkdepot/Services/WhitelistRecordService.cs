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

        public bool addWhitelistRecord (WhitelistRecord whitelistRecord)
        {
            bool isPlatePersisted = _whitelistRepository.isPlatePersisted(whitelistRecord);

            if (isPlatePersisted)
            {
                return false;
            }

            if (whitelistRecord.ParkingRestrictionName == null || whitelistRecord.ParkingRestrictionName == "")
            {
                whitelistRecord.ParkingRestrictionName = DEFAULT_RESTRICTION_NAME;
            }

            return _whitelistRepository.addWhitelistRecord(whitelistRecord);
        }
        public bool updateWhitelistRecord(WhitelistRecord whitelistRecord)
        {
            bool isPlateRepeated = _whitelistRepository.isPlateRepeated(whitelistRecord);
            return isPlateRepeated ? false : _whitelistRepository.updateWhitelistRecord(whitelistRecord);
        } 

        public void removeRecord(WhitelistRecord whitelistRecord)
        {
            _whitelistRepository.removeRecord(whitelistRecord);
        }
    }
}
