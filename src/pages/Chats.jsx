import React from 'react';
import Header from '../components/header/Header';
import Navbar from '../components/Navbar';
import SearchInput from '../components/seachInput/SearchInput';
import {ImBoxAdd} from 'react-icons/im';
import { Link } from 'react-router-dom';
import ChatPreview from '../components/chats/ChatPreview';

export default function Chats() {
  const chats = [
    {
      id: 1,
      name: 'Chat 1',
      lastMessage: 'Hello',
      lastMessageTime: '12:00',
      unreadMessages: 0,
      avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    {
      id: 2,
      name: 'Chat 2',
      lastMessage: 'Hello',
      lastMessageTime: '12:00',
      unreadMessages: 0,
      avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    {
      id: 3,
      name: 'Chat 3',
      lastMessage: 'Hello',
      lastMessageTime: '12:00',
      unreadMessages: 0,
      avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    {
      id: 4,
      name: 'Chat 4',
      lastMessage: 'Hello',
      lastMessageTime: '12:00',
      unreadMessages: 0,
      avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
  ];
  return (
    <>
      <Header title={'Chats'}/>
      <SearchInput/>
      <div className='chats-container'>
        <Link to='/archived' className='archived-container'>
          <ImBoxAdd className='archived-icon'/>
          <p>Archived</p>
        </Link>
        {chats.map(chat => (
          <ChatPreview key={chat.id} chat={chat}/>
        ))}
      </div>
      <Navbar/>
    </>
  )
}
