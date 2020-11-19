import React, {createContext} from 'react'
import { WhitelistRecord } from '../Types/Types'

const editingRecordType: WhitelistRecord = {

    plateLicense: "",
    parkingRestrictionName: "",
    plateOwner: ""
}

const WhitelistContext = React.createContext({
    
    editingRecord: editingRecordType
});
