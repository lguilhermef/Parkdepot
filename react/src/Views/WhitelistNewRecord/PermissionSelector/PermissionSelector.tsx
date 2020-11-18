import React, { ChangeEvent, useState, useEffect } from 'react'
import axios, {AxiosResponse} from 'axios'
import { ParkingRestriction } from '../../../Types/Types'
import { GET_PARKING_PERMISSION_LST_URL } from '../../../Constants/Constants'

interface Props {
    setOptionHook: Function
}

export const PermissionSelector = ({setOptionHook}: Props) => {

    const [lstOptions, setLstOptions] = useState<ParkingRestriction[]>([]);

    useEffect(() => {

        axios({

            method: "get",
            url: GET_PARKING_PERMISSION_LST_URL

        }).then((response: AxiosResponse) => {
            
            if (response.data){
                setLstOptions(response.data);
            }
        });
    }, []);
    
    const renderOptions = () => {
        return lstOptions.map(option => {
            return <option key={option.restrName} value={option.restrName}>{option.restrName} (Time Limit: {option.maxParkingTime})</option>
        })
    }

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setOptionHook(e.target.value)
    }

    return (
        <div className="rowDiv">
            <select onChange={e => handleChange(e)}>
                {renderOptions()}
            </select>
        </div>
    )
} 