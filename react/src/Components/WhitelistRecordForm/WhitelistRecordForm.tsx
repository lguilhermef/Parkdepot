import React, { useState } from 'react'
import './WhitelistRecordForm.css'
import { WhitelistRecord } from '../../Types/Types'
import {PermissionSelector} from '../../Views/WhitelistNewRecord/PermissionSelector/PermissionSelector'
import { getCurrentUser } from '../../Authentication/Authentication'
import { PermissionType } from '../../Enums/Enums'

interface Props {
    editRecord: WhitelistRecord | null,
    submitForm: Function
}

export const WhitelistRecordForm = ({editRecord, submitForm }: Props): JSX.Element => {

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

            {getCurrentUser().permission == PermissionType.MANAGER ? <PermissionSelector setOptionHook={setParkingReistrictionName}/> : <></>}

            <button onClick={() => formSubmission()}>{editRecord ? 'Update' : 'Add'}</button>
            {editRecord ? <button className="cancelButton" onClick={() => window.location.reload()}>Cancel</button> : <></>}
        </div>
    )
}