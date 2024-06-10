import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Pages/Home";
import './App.css';
import { useLocation } from 'react-router-dom';
import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout';
import Login from "./Pages/login/Login";
import Signin from "./Pages/signin/Signin";
import UserHome from "./Pages/userhome/UserHome";
import Student from "./Pages/Student.js";


function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  const [showProfil, setShowProfil] = useState(false);
  const [isConnect, setIsConnect] = useState(false)
  const [status, setStatus] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Layout  />}>
            <Route index element={<Home showProfil={showProfil} setShowProfil={setShowProfil} />} />
            <Route path='register' element={<Signin />} />
            <Route path='login' element={<Login isConnect={isConnect} setIsConnect={setIsConnect} email={email} setEmail={setEmail}
                                          password={password} setPassword={setPassword} status={status} setStatus={setStatus}
                                          showProfil={showProfil} setShowProfil={setShowProfil}/>} />
            <Route path='userhome' element={<UserHome email={email} showProfil={showProfil} setShowProfil={setShowProfil} status={status} setStatus={setStatus}/>} />
            <Route path='student' element={<Student email={email} showProfil={showProfil} setShowProfil={setShowProfil} status={status} setStatus={setStatus}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;