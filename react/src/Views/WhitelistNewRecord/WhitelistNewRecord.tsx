import React, { useState } from 'react'
import './WhitelistNewRecord.css'
import { WhitelistRecord } from '../../Types/Types'
import axios, {AxiosResponse} from 'axios'
import { NEW_WHITELIST_RECORD_URL, WHITELIST_ENTRY_SUCCESS, WHITELIST_ENTRY_ERROR } from '../../Constants/Constants'
import { AppMessage } from '../../Components/AppMessage/AppMessage'
import { AppMessageType } from '../../Enums/Enums'
import {WhitelistRecordForm} from '../../Components/WhitelistRecordForm/WhitelistRecordForm'
import { getCurrentUser } from '../../Authentication/Authentication'


export const WhitelistNewRecord = (): JSX.Element => {
    
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

    const submitForm = (newWhitelistRecord: WhitelistRecord): void => {

        if (newWhitelistRecord.plateLicense.length < 3 && newWhitelistRecord.plateOwner.length < 2){
            setShowErrorMessage(true);
            return;
        }

        axios({

            method: "post",
            url: NEW_WHITELIST_RECORD_URL,
            headers: {"Authorization" : `Bearer ${getCurrentUser().jwtToken}`},
            data: newWhitelistRecord
        }).then((response: AxiosResponse) => {
        
            setShowSuccessMessage(true);
        }).catch(() => {

            setShowErrorMessage(true);
        });
    }

    return (
        <>
            <WhitelistRecordForm editRecord={null} submitForm={submitForm}/>

            <AppMessage message={WHITELIST_ENTRY_SUCCESS} messageType={AppMessageType.SUCCESS} showMessage={showSuccessMessage} hideMessageHook={setShowSuccessMessage}/>
            <AppMessage message={WHITELIST_ENTRY_ERROR} messageType={AppMessageType.ERROR} showMessage={showErrorMessage} hideMessageHook={setShowErrorMessage}/>
        </>
    )
}