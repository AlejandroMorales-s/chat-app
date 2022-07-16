import './App.scss';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login'
import Chats from './pages/Chats'
import Users from './pages/Users';
import Chat from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/chats' element={<Chats/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
