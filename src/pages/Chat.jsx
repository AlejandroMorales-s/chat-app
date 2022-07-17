import React from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatInputArea from '../components/chat/ChatInputArea';
import LoggedUserMessages from '../components/chat/LoggedUserMessages';
import UserMessages from '../components/chat/UserMessages';

export default function Chat() {
    return (
        <>
            <ChatHeader/>
            <div id='chat-bg' className='chat-bg'>
                <LoggedUserMessages/>
                <UserMessages/>
            </div>
            <ChatInputArea/>
        </>
    )
}
