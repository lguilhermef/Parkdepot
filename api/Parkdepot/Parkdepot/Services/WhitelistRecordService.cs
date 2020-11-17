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
            _whitelistRepository.addWhitelistRecord(whitelistRecord);
        }
    }
}
