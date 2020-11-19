import React, { useState } from 'react'
import { WhitelistRecord } from '../../Types/Types'
import {PermissionSelector} from '../../Views/WhitelistNewRecord/PermissionSelector/PermissionSelector'

interface Props {
    editRecord: WhitelistRecord | null,
    submitForm: Function
}

export const RecordForm = ({editRecord, submitForm }: Props): JSX.Element => {

    const [plateOwner, setPlateOwner] = useState<string>(editRecord ? editRecord.plateOwner : "");
    const [plateLicense, setPlateLicense] = useState<string>(editRecord ? editRecord.plateLicense : "");
    const [parkingRestrictionName, setParkingReistrictionName] = useState<string>(editRecord ? editRecord.parkingRestrictionName : "");

    const whitelistEntry: WhitelistRecord = {

        plateLicense: plateLicense,
        plateOwner: plateOwner,
        parkingRestrictionName: parkingRestrictionName
    }

    const formSubmission = () => {

        submitForm(whitelistEntry);
        clearForm();
    }

    const clearForm = () => {
        setPlateLicense("");
        setParkingReistrictionName("");
        setPlateOwner("");
    }
        
    return (

        <div className="form">
            <h1>Whitelist Entry</h1>

            <div className="rowDiv">
                <input className="newRecordForm" 
                    placeholder="Plate Owner" 
                    type="text" 
                    value={plateOwner} 
                    onChange={event => setPlateOwner(event.target.value)}>
                </input>
            </div>

            <div className="rowDiv">
                <input className="newRecordForm" 
                    placeholder="Plate License" 
                    value={plateLicense} 
                    type="text" 
                    onChange={event => setPlateLicense(event.target.value)}>
                </input>
            </div>

            <PermissionSelector setOptionHook={setParkingReistrictionName}/>

            <button onClick={() => formSubmission()}>{editRecord ? 'Update' : 'Add'}</button>
        </div>  
    )
}