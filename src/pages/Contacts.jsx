import React from 'react'
import Contact from '../components/contacts/Contact'
import Header from '../components/header/Header'
import Navbar from '../components/Navbar'
import SearchInput from '../components/seachInput/SearchInput'

export default function Contacts() {
    const contacts = [
        {
            id: 1,
            name: 'John Doe',
            status: 'online',
            avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        },
        {
            id: 2,
            name: 'Jane Doe',
            status: 'online',
            avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        }
    ]
    return (
        <>
            <Header title={'Contacts'}/>
            <SearchInput/>
            <div className='contacts-container'>
                {contacts.map(contact => {
                    return <Contact key={contact.id} contact={contact}/>
                })}
            </div>
            <Navbar/>
        </>
    )
}
