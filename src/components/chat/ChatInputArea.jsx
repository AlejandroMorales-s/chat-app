import React from 'react';
import {IoMdSend} from 'react-icons/io';
import {BiHappy} from 'react-icons/bi';
import {AiOutlinePaperClip} from 'react-icons/ai';

export default function ChatInputArea() {
    return (
        <div className='chat-input-bg'>
            <div className='chat-input-area-container'>
                <div className='chat-input-container'>
                    <input className='chat-input' type="text" placeholder="Type a message..."/>
                    <BiHappy className='chat-input-icon emojis-icon'/>
                    <AiOutlinePaperClip className='chat-input-icon archives-icon'/>
                </div>
                <button className='chat-input-button'>
                    <IoMdSend className='chat-input-button-icon'/>
                </button>
            </div>
        </div>
    )
}
