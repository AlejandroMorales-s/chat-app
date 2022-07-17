import React from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatInputArea from '../components/chat/ChatInputArea';

export default function Chat() {
    return (
        <>
            <ChatHeader/>
            <div id='chat-bg' className='chat-bg'></div>
            <ChatInputArea/>
        </>
    )
}
