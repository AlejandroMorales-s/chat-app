import React from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatInputArea from '../components/chat/ChatInputArea';

export default function Chat() {
    return (
        <>
            <ChatHeader/>
            <div className='chat-bg'></div>
            <ChatInputArea/>
        </>
    )
}
