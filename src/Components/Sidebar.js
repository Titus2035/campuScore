import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div className='sidemenu'>
        <div className='sidelink head'>Classes</div>
        <Link to="/userhome" className='sidelink restyle'>6 eme</Link>
        <Link to="/userhome" className='sidelink restyle'>5 eme</Link>
        <Link to="/userhome" className='sidelink restyle active'>4 eme</Link>
        <Link to="/userhome" className='sidelink restyle'>3 eme</Link>
        <Link to="/userhome" className='sidelink restyle'>2 nd</Link>
        <Link to="/userhome" className='sidelink restyle'>1 ere</Link>
        <Link to="/userhome" className='sidelink restyle'>Terminale</Link>
      </div>
    </div>
  )
}

export default Sidebar
