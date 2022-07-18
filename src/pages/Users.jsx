import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/Navbar'
import SearchInput from '../components/seachInput/SearchInput'
import User from '../components/users/User'

export default function Users() {
    const users = [
        {
            id: 1,
            name: 'Иван',
            avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        },
        {
            id: 2,
            name: 'Петр',
            avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        }
    ]
    return (
        <>  
            <Header title={'Users'}/>
            <SearchInput/>
            <div className='users-container'>
                {users.map(user => {
                    return (
                        <User key={user.id} user={user}/>
                    )
                })}
            </div>
            <Navbar/>
        </>
    )
}
