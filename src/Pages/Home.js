import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer/Footer'

const Home = ({showProfil, setShowProfil}) => {
  function handleprofil(){
    setShowProfil(true);
    console.log(showProfil);
  }
  return (
    <div>
      <Header showProfil={showProfil}/>
      <div className='homepage'>
        <div className='logo nostyle' onClick={handleprofil}>CourShare</div>
      <h2>Bienvenue dans notre application web de partage de cours</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptates facere fugiat illo commodi vitae.</p>
      {/* <Link to='userhome'>Page Enseignant</Link><br/> */}
      <div className='group'>
          <Link to='login' className='btn btn-action restyle'><span>Se connecter</span></Link><br/>
          <Link to='register' className='btn btn-action restyle color2'>Créer un compte</Link><br/>
      </div>
      
      </div>
      <Footer/>
    </div>
  )
}

export default Home
