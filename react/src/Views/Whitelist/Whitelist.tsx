import React, { useState, useEffect } from 'react'
import './Whitelist.css'
import axios, {AxiosResponse} from 'axios'
import { GET_WHITELIST_URL } from '../../Constants/Constants'
import {WhitelistRecord} from '../../Types/Types'
import { AppMessageType } from '../../Enums/Enums'
import { GET_WHITELIST_ERROR, DELETE_WHITELIST_ENTRY_URL, UPDATE_WHITELIST_RECORD_URL } from '../../Constants/Constants'
import { AppMessage } from '../../Components/AppMessage/AppMessage'
import { WhitelistRecordForm } from '../../Components/WhitelistRecordForm/WhitelistRecordForm'


export const Whitelist = (): JSX.Element => {

    const [whitelist, setWhitelist] = useState<WhitelistRecord[]>();
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
    const [showEditView, setShowEditView] = useState<boolean>(false);
    const [editRecord, setEditRecord] = useState<WhitelistRecord | null>(null);

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

    const deleteEntry = (record: WhitelistRecord) => {

        axios({

            method: "post",
            url: DELETE_WHITELIST_ENTRY_URL,
            data: record
    
        }).then((response: AxiosResponse) => {
        
            if (whitelist) {
                let updatedList: WhitelistRecord[] = whitelist.filter(r => r.plateLicense != record.plateLicense);
                setWhitelist(updatedList);
            }
        
        }).catch(() => {
            //TODO: Customize message to reflect the failure to delete an entry;
            setShowErrorMessage(true);
        });
    }

    const updateRecord = (editWhitelistRecord: WhitelistRecord): void => {

        if (editWhitelistRecord.plateLicense.length < 3 && editWhitelistRecord.plateOwner.length < 2){
            setShowErrorMessage(true);
            return;
        }

        axios({

            method: "put",
            url: UPDATE_WHITELIST_RECORD_URL,
            data: editWhitelistRecord
        }).then((response: AxiosResponse) => {
        
            window.location.reload();
            //TODO: Show Success Message;
            //setShowSuccessMessage(true);
        }).catch(() => {

            setShowErrorMessage(true);
        });
    }

    const renderTableData = (record: WhitelistRecord): JSX.Element => (

        <tr id={record.plateLicense}>
            <td>{record.plateOwner}</td>
            <td>{record.plateLicense}</td>
            <td>{record.parkingRestrictionName}</td>
            <td>
                <button className="tableDeleteButton" onClick={() => deleteEntry(record)}>Delete</button> 
                <button className="tableEditButton" onClick={() => editEntry(record)}>Edit</button>
            </td>
        </tr>
    );

    const renderTable = ():JSX.Element => (

        <table className="form tableForm">
            <thead>
                <tr>
                    <th>Owner</th>
                    <th>Vehicle Plate</th>
                    <th>License Type</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {whitelist?.map((wr: WhitelistRecord) => renderTableData(wr))}
            </tbody>
        </table>
    );

    const editEntry = (record: WhitelistRecord) => {
        setEditRecord(record);
        setShowEditView(true);
    }

    const renderWhitelistRecordForm =() => (
        <WhitelistRecordForm editRecord={editRecord} submitForm={updateRecord}/>
    )

    const renderWhitelist = () => (
        <div className="form">
            <h1>Whitelist</h1>
            {renderTable()}
        </div>
    )
 
    return (
        <>
            {showEditView ? renderWhitelistRecordForm() : renderWhitelist()}
            <AppMessage message={GET_WHITELIST_ERROR} messageType={AppMessageType.ERROR} showMessage={showErrorMessage} hideMessageHook={setShowErrorMessage}/>
        </>
    );
}