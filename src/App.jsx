import { useState } from 'react'
import './App.css'
import UserPanel from './components/UserPanel/UserPanel'
import Login from './components/Login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPanel2 from './components/UserPanel/UserPaneel2';

function App() {

  return(
    <Router>
    <div>
   <Routes>
    <Route path="/userpanel" element={<UserPanel />} />
    <Route path="/login" element={<Login />} />
    <Route path="/userpanel1" element={<UserPanel2/>} />
   </Routes>
    </div>
    </Router>
  )
}

export default App
