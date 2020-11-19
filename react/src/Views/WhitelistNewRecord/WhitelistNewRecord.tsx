import React, { useState } from 'react'
import './WhitelistNewRecord.css'
import { WhitelistRecord } from '../../Types/Types'
import axios, {AxiosResponse} from 'axios'
import { NEW_WHITELIST_RECORD_URL, WHITELIST_ENTRY_SUCCESS, WHITELIST_ENTRY_ERROR } from '../../Constants/Constants'
import { AppMessage } from '../../Components/AppMessage/AppMessage'
import { AppMessageType } from '../../Enums/Enums'
import {PermissionSelector} from './PermissionSelector/PermissionSelector'
import {RecordForm} from '../../Components/RecordForm/RecordForm'

export const WhitelistNewRecord = () => {
    
    //const [plateLicense, setPlateLicense] = useState<string>("");
    //const [parkingRestrictionName, setParkingReistrictionName] = useState<string>("");
    //const [plateOwner, setPlateOwner] = useState<string>("");
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
    //edit -> booleano; 



    /*let newWhitelistEntry: WhitelistRecord = {
        plateOwner: plateOwner,
        plateLicense: plateLicense,
        parkingRestrictionName: parkingRestrictionName,
    };*/

    const submitForm = (newWhitelistRecord: WhitelistRecord) => {

        if (newWhitelistRecord.plateLicense.length < 3 && newWhitelistRecord.plateOwner.length < 2){
            setShowErrorMessage(true);
            return;
        }

        axios({

            method: "post",
            url: NEW_WHITELIST_RECORD_URL,
            data: newWhitelistRecord
        }).then((response: AxiosResponse) => {
        
            setShowSuccessMessage(true);
        }).catch(() => {

            setShowErrorMessage(true);
        });
    }

    return (
        <>
            <RecordForm editRecord={null} submitForm={submitForm}/>

            <AppMessage message={WHITELIST_ENTRY_SUCCESS} messageType={AppMessageType.SUCCESS} showMessage={showSuccessMessage} hideMessageHook={setShowSuccessMessage}/>
            <AppMessage message={WHITELIST_ENTRY_ERROR} messageType={AppMessageType.ERROR} showMessage={showErrorMessage} hideMessageHook={setShowErrorMessage}/>
        </>
    )
}