import React, { useState } from 'react'
import './WhitelistRecordForm.css'
import { WhitelistRecord } from '../../Types/Types'
import {PermissionSelector} from '../../Views/WhitelistNewRecord/PermissionSelector/PermissionSelector'
import { getCurrentUser } from '../../Authentication/Authentication'
import { PermissionType } from '../../Enums/Enums'
import { AppMessageType } from '../../Enums/Enums'
import { WHITELIST_ENTRY_DATA_ERROR } from '../../Constants/Constants'
import { AppMessage } from '../../Components/AppMessage/AppMessage'


interface Props {
    editRecord: WhitelistRecord | null,
    submitForm: Function
};

export const WhitelistRecordForm = ({editRecord, submitForm }: Props): JSX.Element => {

    const recordId = editRecord ? editRecord.id : 0;
    const [plateOwner, setPlateOwner] = useState<string>(editRecord ? editRecord.plateOwner : "");
    const [plateLicense, setPlateLicense] = useState<string>(editRecord ? editRecord.plateLicense : "");
    const [parkingRestrictionName, setParkingReistrictionName] = useState<string>(editRecord ? editRecord.parkingRestrictionName : "");
    const [showDataErrorMessage, setShowDataErrorMessage] = useState<boolean>(false);

    const whitelistEntry: WhitelistRecord = {

        id: recordId,
        plateLicense: plateLicense,
        plateOwner: plateOwner,
        parkingRestrictionName: parkingRestrictionName
    };

    const formSubmission = (): void => {

        if (dataTooShort || dataTooLong){
            setShowDataErrorMessage(true);
            return;
        };

        submitForm(whitelistEntry);
        clearForm();
    };

    const dataTooShort = (): boolean => {
        return whitelistEntry.plateLicense.length < 3 || whitelistEntry.plateOwner.length < 3;
    };

    const dataTooLong = (): boolean => {
        return whitelistEntry.plateLicense.length > 13 || whitelistEntry.plateOwner.length > 13;
    }

    const clearForm = (): void => {
        setPlateLicense("");
        setParkingReistrictionName("");
        setPlateOwner("");
    };
        
    return (

        <>
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
            <AppMessage message={WHITELIST_ENTRY_DATA_ERROR} messageType={AppMessageType.ERROR} showMessage={showDataErrorMessage} hideMessageHook={setShowDataErrorMessage}/>
        </>
    );
}