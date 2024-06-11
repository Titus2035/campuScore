import React from 'react'
import '../App.css';
import { Link, Navigate } from 'react-router-dom';
import USERS from '../constantes/users';
const Header = ({showProfil, setShowProfil, email, isConnect, setIsConnect}) => {
  console.log("**************************ShowProfil header => ",showProfil);

  const getName = (email) => {
    let contentname= " "
    for (let i = 0; i < USERS.length; i++) {
      if (USERS[i].email === email) {
        contentname= USERS[i].name
  console.log("**************************ShowProfil header => ",showProfil);
} 
    }
    return contentname
  }

  const get_name = getName(email);
  console.log("**************************ShowProfil header => ",showProfil);

  const deconnect = () => {
    setIsConnect(false)
    Navigate('/')
}

  return (
    <div>
      <header>
          <Link to='/' className='nostyle'><div className='logo marge'>CourShare</div> </Link>
            {showProfil ?
              <div>
                <div className='profil'>
                <div className='name'>{get_name}</div>
                <div className='pp'>{get_name.charAt(0).toLocaleUpperCase()}</div>
                <Link className='btn btn-add ' to='/' onClick={() => deconnect()}>Deconnexion</Link>
              </div> 
              </div>: <div></div>
              // <div className='profil'>
              //   <Link className='name'>se connecter</Link>
              //   <div className='pp'>W</div>
              // </div> 
            }
      </header>
    </div>
  )
}

export default Header
