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
                handleChange(lstOptions[0]?.restrName);
            }
        }).catch(e => {
            console.log(e);
        });
    }, [lstOptions]);
    
    const renderOptions = () => {
        return lstOptions.map(option => {
            return <option key={option.restrName} value={option.restrName}>{option.restrName} (Time Limit: {option.maxParkingTime})</option>
        })
    }

    const handleChange = (option: string) => {
        setOptionHook(option)
    }

    return (
        <div className="rowDiv">
            <select value={lstOptions[0]?.restrName} onChange={e => handleChange(e.target.value)}>
                {renderOptions()}
            </select>
        </div>
    )
} 