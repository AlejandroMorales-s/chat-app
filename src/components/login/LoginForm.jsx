import React, {useEffect, useState} from 'react';
import { api } from '../../api/query';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';

export default function LoginForm() {

    const navigate = useNavigate();
    //const dispatch = useDispatch() // Funcion para actualizar el estado
    const [login, {isError,isLoading,isSuccess}] = api.useLoginMutation()
    const [isShowingModal, setShowingModal] = useState(false);

    const handleLogin = async (event)=>{
        event.preventDefault();
        const {email,password} = event.target;
        login({
            email:email.value,
            password:password.value
        });
    };
    
    isSuccess && navigate('/chats');
    
    useEffect(()=>{
        isError && setShowingModal(true);
    },[isError]);

    return (
        <>
            <form className='form' onSubmit={handleLogin}>
                <div className='input-container'>
                    <label className='label'>Email/Username</label>
                    <input 
                        className='input' type="email" 
                        name="email" placeholder='example@example.com'
                    />
                </div>
                <div className='input-container'>
                    <label className='label'>Password</label>
                    <input 
                        className='input' type="password" 
                        name="password" placeholder='********'
                    />
                </div>
                <button disabled={isLoading} className='button'>
                    {isLoading?
                        <span>
                            <svg className='spinner' viewBox="25 25 50 50">
                                <circle className='spinner-circle' r="20" cy="50" cx="50"></circle>
                            </svg>
                        </span>
                    :
                        <span>Login</span>}
                </button>
            </form>
            {isShowingModal &&
                <div className='modal-area'>
                    <Modal title={'Error'} desc={'An error ocurred'} type={'error'} setShowingModal={setShowingModal}/>
                </div>
            }
        </>
    )
}
