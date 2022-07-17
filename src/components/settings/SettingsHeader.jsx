import React from 'react';
import {BiArrowBack} from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function SettingsHeader() {
    return (
        <div className='chat-header'>
            <Link to='/chats'>
                <BiArrowBack className='chat-header-return-icon'/>
            </Link>
            <div>
                <h2>Me</h2>
            </div>
        </div>
    )
}
