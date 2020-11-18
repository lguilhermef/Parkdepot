import React, { useState } from 'react'

interface AppMessage {
    message: string,
    messageType: string,
    showMessage: boolean
}

export const AppMessage = ({message, messageType, showMessage}: AppMessage) => {

    return showMessage ? (<div className="message"><span className={messageType}>{message}</span></div>) : <div></div>;
}