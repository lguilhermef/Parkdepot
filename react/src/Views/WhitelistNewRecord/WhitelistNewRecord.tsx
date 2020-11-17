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
        <div className="form">
           
                <h1>Whitelist Entry</h1>
            
                <div className="rowDiv">
                    <input className="newRecordForm" placeholder="Plate License" type="text" onChange={event => setPlateLicense(event.target.value)}></input>
                </div>

                <div className="rowDiv">
                    <input className="newRecordForm" placeholder="Permision Type" type="text" onChange={event => setParkingReistrictionName(event.target.value)}></input>
                </div>

                <div className="rowDiv">
                    <input className="newRecordForm" placeholder="Plate Owner" type="text" onChange={event => setPlateOwner(event.target.value)}></input>
                </div>
      
            <button onClick={() => postNewWhitelistRecord()}>Add</button>
        </div>  
    )
}