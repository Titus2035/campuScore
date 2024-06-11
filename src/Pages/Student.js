import React from 'react'
import Content from '../Components/Content'
import Header from '../Components/Header'
import Footer from '../Components/Footer/Footer'

const Student = ({email, showProfil, setShowProfil, status, setStatus}) => {
  return (
    <div>
      <Header email={email} showProfil={showProfil} setShowProfil={setShowProfil}/><br/>
      <Content email={email} showProfil={showProfil} setShowProfil={setShowProfil} status={status} setStatus={setStatus}/>
      <Footer/>
    </div>
  )
}

export default Student
