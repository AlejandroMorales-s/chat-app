import './App.scss';
import {appTheme} from './localStorage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login'
import Chats from './pages/Chats'
import Users from './pages/Users';
import Chat from './pages/Chat';
import Contacts from './pages/Contacts';
import Settings from './pages/Settings';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    appTheme(localStorage.getItem('theme'));
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/chats' element={<Chats/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
