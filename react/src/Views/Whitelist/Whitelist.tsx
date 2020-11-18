import React, { useState, useEffect } from 'react'
import './Whitelist.css'
import axios, {AxiosResponse} from 'axios'
import { GET_WHITELIST_URL } from '../../Constants/Constants'
import {WhitelistRecord} from '../../Types/Types'
import { AppMessageType } from '../../Enums/Enums'
import { GET_WHITELIST_ERROR } from '../../Constants/Constants'
import { AppMessage } from '../../Components/AppMessage/AppMessage'


export const Whitelist = () => {

    const [whitelist, setWhitelist] = useState<WhitelistRecord[]>();
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

    useEffect(() => {

        axios({

            method: "get",
            url: GET_WHITELIST_URL
        }).then((response: AxiosResponse) => {
            
            if (response.data){
                setWhitelist(response.data);
            }
        
        }).catch(e => {
            setShowErrorMessage(true);
        })
            
    }, []);

    const renderTableData = () => {

        if (whitelist){
            return whitelist.map(record => {
                return <tr id={record.plateLicense}><td>{record.plateLicense}</td><td>{record.plateOwner}</td><td>{record.parkingRestrictionName}</td></tr>
            });
        }
    }

    const renderTable = () => {

        return (
            <table className="form tableForm">
                <thead>
                    <tr>
                        <th>Vehicle Plate</th>
                        <th>Owner</th>
                        <th>License Type</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
        );
    }
 
    return (
        <div>
            <div className="form">
                <h1>Whitelist</h1>
                {renderTable()}
            </div>
            <AppMessage message={GET_WHITELIST_ERROR} messageType={AppMessageType.ERROR} showMessage={showErrorMessage} hideMessageHook={setShowErrorMessage}/>
        </div>
    )
}