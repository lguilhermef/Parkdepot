import React, { useState } from 'react'
import './WhitelistNewRecord.css'
import { WhitelistRecord } from '../../Types/Types'
import axios, {AxiosResponse} from 'axios'
import { NEW_WHITELIST_RECORD_URL } from '../../Constants/Constants'

export const WhitelistNewRecord = () => {
    
    const [plateLicense, setPlateLicense] = useState<string>("");
    const [parkingRestrictionName, setParkingReistrictionName] = useState<string>("");
    const [plateOwner, setPlateOwner] = useState<string>("");
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);


    let newWhitelistEntry: WhitelistRecord = {
        plateLicense: plateLicense,
        parkingRestrictionName: "Staff",
        plateOwner: plateOwner,
    };

    const postNewWhitelistRecord = () => {
        
        axios({

            method: "post",
            url: NEW_WHITELIST_RECORD_URL,
            data: newWhitelistEntry
    
          }).then((response: AxiosResponse) => {
            setShowSuccessMessage(true);
            clearFrom();
        });
    }

    const clearFrom = () => {
        setPlateLicense("");
        setParkingReistrictionName("");
        setPlateOwner("");
    }

    const interfaceErrorMessage = () => {
        return showErrorMessage ? (<div className="errorMessage"><span className="messageText">Wrong email or password.</span></div>) : <div></div>;
    }

    const interfaceSuccessMessage = () => {
        setTimeout(() => setShowSuccessMessage(false), 4000);
        return showSuccessMessage ? (<div className="successMessage"><span className="messageText">Plate succesfully added.</span></div>) : <div></div>;
    }
    
    return (
        <div>
        <div className="form">
           
                <h1>Whitelist Entry</h1>
            
                <div className="rowDiv">
                    <input className="newRecordForm" placeholder="Plate License" value={plateLicense} type="text" onChange={event => setPlateLicense(event.target.value)}></input>
                </div>

                <div className="rowDiv">
                    <input className="newRecordForm" placeholder="Permision Type" value={parkingRestrictionName} type="text" onChange={event => setParkingReistrictionName(event.target.value)}></input>
                </div>

                <div className="rowDiv">
                    <input className="newRecordForm" placeholder="Plate Owner" type="text" value={plateOwner} onChange={event => setPlateOwner(event.target.value)}></input>
                </div>
      
            <button onClick={() => postNewWhitelistRecord()}>Add</button>
        </div>  
        {interfaceSuccessMessage()}
        </div>
    )
}