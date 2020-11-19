import React from 'react'
import './AppMessage.css'
import { AppMessageType } from '../../Enums/Enums'

interface AppMessage {
    message: string,
    messageType: AppMessageType,
    showMessage: boolean,
    hideMessageHook: Function
}

export const AppMessage = ({message, messageType, showMessage, hideMessageHook}: AppMessage): JSX.Element => {
    
    setTimeout(() => hideMessageHook(false), 6000);
    return showMessage ? (<div className={messageType}><span className="messageText">{message}</span></div>) : <></>;
}