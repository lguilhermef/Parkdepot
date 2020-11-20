import React, { ChangeEvent, useState, useEffect } from 'react'
import axios, {AxiosResponse} from 'axios'
import { ParkingRestriction, WhitelistRecord } from '../../../Types/Types'
import { GET_PARKING_PERMISSION_LST_URL, DEFAULT_PARKING_RESTRICTION_NAME } from '../../../Constants/Constants'
import { getCurrentUser } from '../../../Authentication/Authentication'

interface Props {
    setOptionHook: Function,
    editRecord: WhitelistRecord | null,
}

export const PermissionSelector = ({setOptionHook, editRecord}: Props): JSX.Element => {

    const [lstOptions, setLstOptions] = useState<ParkingRestriction[]>([]);

    useEffect(() => {

        axios({
            method: "get",
            url: GET_PARKING_PERMISSION_LST_URL,
            headers: {"Authorization" : `Bearer ${getCurrentUser().jwtToken}`}
        }).then((response: AxiosResponse) => {
            
            if (response.data){

                let organizedOpts: ParkingRestriction[] =  getFirstOption(response.data);
                setLstOptions(organizedOpts);
                handleChange(organizedOpts[0]?.restrName);
            }

        }).catch(e => {
            console.log(e);
        });
    }, []);

    const getFirstOption = (arrParkingRestriction:ParkingRestriction[]): ParkingRestriction[] => {
        return editRecord ? getEditRecordOptionFirst(arrParkingRestriction) : getDefaultOptionFirst(arrParkingRestriction, DEFAULT_PARKING_RESTRICTION_NAME);
    }

    const getEditRecordOptionFirst = (arrParkingRestriction:ParkingRestriction[]): ParkingRestriction[] => {

        let defaultOption: ParkingRestriction | undefined = arrParkingRestriction.find((option: ParkingRestriction) => option.restrName == editRecord?.parkingRestrictionName);
        let editOptionlessArr: ParkingRestriction[] = arrParkingRestriction.filter((option: ParkingRestriction) => option.restrName != defaultOption?.restrName);

        if (defaultOption) {
            editOptionlessArr.unshift(defaultOption);
        }

        return defaultOption ? editOptionlessArr : arrParkingRestriction;
    };

    const getDefaultOptionFirst = (arrParkingRestriction :ParkingRestriction[], defaultOptionName: string): ParkingRestriction[] => {
        //TODO: Boiler Plate!!
        let defaultOption: ParkingRestriction | undefined = arrParkingRestriction.find((option: ParkingRestriction) => option.restrName == defaultOptionName);
        let defaultlessArr: ParkingRestriction[] = arrParkingRestriction.filter((option: ParkingRestriction) => option.restrName != defaultOptionName);

        if (defaultOption) {
            defaultlessArr.unshift(defaultOption);
        }

        return defaultOption ? defaultlessArr : arrParkingRestriction;
    };
    
    const renderOptions = (): JSX.Element[] => (
        
        lstOptions.map((option: ParkingRestriction) => (

            <option key={option.restrName} value={option.restrName}>{option.restrName} (Time Limit: {option.maxParkingTime}h)</option>
        )
    ));

    const handleChange = (option: string): void => {
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