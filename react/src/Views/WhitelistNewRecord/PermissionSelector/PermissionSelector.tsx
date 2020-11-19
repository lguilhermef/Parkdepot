import React, { ChangeEvent, useState, useEffect } from 'react'
import axios, {AxiosResponse} from 'axios'
import { ParkingRestriction } from '../../../Types/Types'
import { GET_PARKING_PERMISSION_LST_URL, DEFAULT_PARKING_RESTRICTION_NAME } from '../../../Constants/Constants'
import { getCurrentUser } from '../../../Authentication/Authentication'

interface Props {
    setOptionHook: Function
}

export const PermissionSelector = ({setOptionHook}: Props) => {

    const [lstOptions, setLstOptions] = useState<ParkingRestriction[]>([]);

    useEffect(() => {

        axios({
            method: "get",
            url: GET_PARKING_PERMISSION_LST_URL,
            headers: {"Authorization" : `Bearer ${getCurrentUser().jwtToken}`}
        }).then((response: AxiosResponse) => {
            
            if (response.data){

                let organizedOpts: ParkingRestriction[] = setDefaultOptionFirst(response.data, DEFAULT_PARKING_RESTRICTION_NAME);
                setLstOptions(organizedOpts);
                handleChange(organizedOpts[0]?.restrName);
            }

        }).catch(e => {
            console.log(e);
        });
    }, []);

    const setDefaultOptionFirst = (arrParkingRestriction :ParkingRestriction[], defaultOptionName: string) => {

        let defaultOption: ParkingRestriction | undefined = arrParkingRestriction.find((option: ParkingRestriction) => option.restrName == defaultOptionName);
        let defaultlessArr: ParkingRestriction[] = arrParkingRestriction.filter((option: ParkingRestriction) => option.restrName != defaultOptionName);

        if (defaultOption) {
            defaultlessArr.unshift(defaultOption);
        }

        return defaultOption ? defaultlessArr : arrParkingRestriction;
    };
    
    const renderOptions = () => (
        
        lstOptions.map((option: ParkingRestriction) => (

            <option key={option.restrName} value={option.restrName}>{option.restrName} (Time Limit: {option.maxParkingTime}h)</option>
        )
    ));

    const handleChange = (option: string) => {
        setOptionHook(option)
    };

    return (
        <div className="rowDiv">
            <select onChange={e => handleChange(e.target.value)}>
                {renderOptions()}
            </select>
        </div>
    );
} 