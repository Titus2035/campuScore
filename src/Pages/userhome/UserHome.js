import React from 'react'
import './userhome.css';
import Sidebar from '../../Components/Sidebar';
import Content from '../../Components/Content';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer/Footer';

const UserHome = ({email, showProfil, setShowProfil, status, setStatus}) => {
  return (
    <div>
      <Header email={email} showProfil={showProfil} setShowProfil={setShowProfil}/><br/>
        <div className='main'>
            <Sidebar/>
      <Content email={email} showProfil={showProfil} setShowProfil={setShowProfil} status={status} setStatus={setStatus}/>
        </div>
        <Footer/>

    </div>
  )
}

export default UserHome
