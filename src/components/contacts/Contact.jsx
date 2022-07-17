import React from 'react'

export default function Contact({contact}) {
    console.log(contact);
    return (
        <div className='contact'>
            <div className='contact-avatar'>
                <img src={contact.avatar} alt='avatar'/>
            </div>
            <h3>Alejandro Morales</h3>
        </div>
    )
}
