
import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios'
import Login from './components/user/Log-In/Login';
import Register from './components/user/register/Register';

// admin
import AdminLogin from './components/admin/login/Login'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from './components/user/home/Home';
import AdminHome from './components/admin/home/Home';
import Profile from './components/user/profile/Profile';



function App() {

  // const [backendData,setBackend] = useState([{}])

  // useEffect(() => {
  //   axios.post('http://localhost:3001/admin/register')
  // },[])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  exact  path='/login' element={<Login/>} />
          <Route  exact  path='/register' element={<Register/>} />
          <Route  exact  path='/' element={<Home/>} />
          <Route exact  path='/profile' element={<Profile/>} />
          {/* admin */}
          <Route exact  path='admin/login' element={<AdminLogin/>} />
          <Route exact  path='admin/' element={<AdminHome/>} />
          
          <Route>404 Not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
