import React, { useState } from 'react'
import './WhitelistNewRecord.css'
import { WhitelistRecord } from '../../Types/Types'
import axios, {AxiosResponse} from 'axios'
import { NEW_WHITELIST_RECORD_URL } from '../../Constants/Constants'

export const WhitelistNewRecord = () => {
    
    const [plateLicense, setPlateLicense] = useState<string>("");
    const [parkingRestrictionName, setParkingReistrictionName] = useState<string>("");
    const [plateOwner, setPlateOwner] = useState<string>("");

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
            console.log(response);
        });
    }

    
    return (
        <div>
            <div>
                <h1>Whitelist Entry</h1>
            
                <div className="rowDiv">
                    <h3 className="label">Plate License</h3>
                    <input className="newRecordForm" type="text" onChange={event => setPlateLicense(event.target.value)}></input>
                </div>

                <div className="rowDiv">
                    <h3 className="label">Permision Type</h3>
                    <input className="newRecordForm" type="text" onChange={event => setParkingReistrictionName(event.target.value)}></input>
                </div>

                <div className="rowDiv">
                    <h3 className="label">Plate Owner</h3>
                    <input className="newRecordForm" type="text" onChange={event => setPlateOwner(event.target.value)}></input>
                </div>
            </div>

            <button onClick={() => postNewWhitelistRecord()}>Add</button>
        </div>  
    )
}