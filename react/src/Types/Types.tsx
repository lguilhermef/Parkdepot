export interface LoginData {
    email: string,
    pass: string
};

export interface NewUserData { 
    email: string,
    username: string,
    pass: string
};

export interface User {
    email: string,
    username: string,
    permission: string,
    jwtToken: string
};

export interface Permission {
    name: string,
    level: number,
    description: string
};

export interface WhitelistRecord {
    plateLicense: string,
    parkingRestrictionName: string,
    plateOwner: string
};

export interface ParkingRestriction{
    restrName: string,
    maxParkingTime: number
};