import React from 'react'
import {useSelector} from 'react-redux'
import LoginForm from '../components/login/LoginForm'
//import { login, logout } from '../features/auth'

export default function Login() {
    const state = useSelector((state)=>{return state.auth}) //Leer el estado

    /*
        const handleLogout = ()=>{
            dispatch(logout())
        }
     */
    return (
        <>
            {state.logged&&<p>{state.user.name}</p>}
            <div className='login-container'>
                <h1>myChat</h1>
                <LoginForm/>
            </div>
        </>
    )
}
