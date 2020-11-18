// ### API URLs ###
export const LOGIN_URL = "https://localhost:44376/api/auth/login";
export const REGISTER_USER_URL = "https://localhost:44376/api/auth/register-user";
export const NEW_WHITELIST_RECORD_URL = "https://localhost:44376/api/whitelist/new-whitelist-record";
export const GET_WHITELIST_URL = "https://localhost:44376/api/whitelist/get-whitelist";
export const GET_PARKING_PERMISSION_LST_URL = "https://localhost:44376/api/parkingRestriction/get-parking-restrictions"


// ### APP MESSAGES ###
export const LOGIN_ERROR_MESSAGE = "Wrong email or password.";

export const WHITELIST_ENTRY_SUCCESS = "Plate succesfully added.";
export const WHITELIST_ENTRY_ERROR = "The plate entry was refused: please, check if the plate is already."
export const GET_WHITELIST_ERROR = "A technical problem prevented the server from loading the whitelist."