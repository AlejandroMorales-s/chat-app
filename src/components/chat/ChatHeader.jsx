import React from 'react';
import {BiArrowBack, BiDotsVerticalRounded} from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function ChatHeader() {
    return (
        <div className='chat-header'>
            <Link to='/chats'>
                <BiArrowBack className='chat-header-return-icon'/>
            </Link>
            <div>
                <div className='header-profile-container'>
                    <img src="" alt="" />
                </div>
                <h2>Alejandro Morales</h2>
            </div>
            <BiDotsVerticalRounded className='chat-header-options-icon'/>
        </div>
    )
}
