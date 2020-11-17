import React, { useState, useEffect } from 'react'
import axios, {AxiosResponse} from 'axios'
import { GET_WHITELIST_URL } from '../../Constants/Constants'
import {WhitelistRecord} from '../../Types/Types'

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

    const renderList = () => {

        if (whitelist){
            return whitelist.map(record => {
                return <li>{record.plateOwner} - {record.plateLicense} - {record.parkingRestrictionName}</li>
            });
        }
    }

    return (
        <div>
            <h1>Whitelist</h1>
            {renderList()}
        </div>
    )
}