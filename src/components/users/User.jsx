import React from 'react';

export default function User({user}) {
    const {name, avatar} = user;
    return (
        <div className='user'>
            <div className='user-avatar-container'>
                <img className='user-avatar' src={avatar} alt={name}/>
            </div>
            <h3>{name}</h3>
            <button className='user-button'>Add</button>
        </div>
    )
}
