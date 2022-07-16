import React from 'react'

export default function ChatPreview({chat}) {
    const {name, lastMessage, lastMessageTime, avatar} = chat;
    console.log(chat); 
    return (
        <>
            <div className='chat-preview-container'>
                <div className='chat-preview-avatar-container'>
                    <img src={avatar} alt='avatar'/>
                </div>
                <div className='chat-preview-info'>
                    <h3 className='chat-preview-name'>{name}</h3>
                    <p className='chat-preview-message'>{lastMessage}</p>
                </div>
                <p>{lastMessageTime}</p>
            </div>
        </>
    )
}
