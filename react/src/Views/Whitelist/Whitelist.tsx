import React, { useState, useEffect } from 'react'
import axios, {AxiosResponse} from 'axios'
import { GET_WHITELIST_URL } from '../../Constants/Constants'
import {WhitelistRecord} from '../../Types/Types'
import './Whitelist.css'

export const Whitelist = () => {

    const [whitelist, setWhitelist] = useState<WhitelistRecord[]>();

    useEffect(() => {

        axios({

            method: "get",
            url: GET_WHITELIST_URL
        }).then((response: AxiosResponse) => {
            
            if (response.data){
                setWhitelist(response.data);
            }
        });
            
    }, []);

    const renderTableData = () => {

        if (whitelist){
            return whitelist.map(record => {
                return <tr><td>{record.plateLicense}</td><td>{record.plateOwner}</td><td>{record.parkingRestrictionName}</td></tr>
            });
        }
    }

    const renderTable = () => {

        return (
            <table className="form tableForm">
                <tr>
                    <th>Vehicle Plate</th>
                    <th>Owner</th>
                    <th>License Type</th>
                </tr>
                {renderTableData()}
            </table>
        );
    }
 
    return (
        <div className="form">
            <h1>Whitelist</h1>
            {renderTable()}
        </div>
    )
}