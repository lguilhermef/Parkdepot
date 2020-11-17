export interface LoginData {
    email: string,
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