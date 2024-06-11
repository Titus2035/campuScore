import React, { useContext, useState } from 'react'
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import USERS from '../../constantes/users';
const Login = ({isConnect, setIsConnect, email, setEmail, password, setPassword, status, setStatus, showProfil, setShowProfil}) => {

  // const { checkEmail, checkPassword, checkClientOrPro } = useContext(ShopContext);

  const [error, setError] = useState(false);

  const checkEmail = (email) => {
    let contentEmail = " "
    for (let i = 0; i < USERS.length; i++) {
      if (USERS[i].email === email) {
        contentEmail = email
      } 
    }
    return contentEmail
  }
  const checkPassword = (password) => {
    let contentpwd = " "
    for (let i = 0; i < USERS.length; i++) {
      if (USERS[i].mdp === password) {
        contentpwd = password
      } 
    }
    return contentpwd
  }
  const getStatus = (email) => {
    let contentstatus= " "
    for (let i = 0; i < USERS.length; i++) {
      if (USERS[i].email === email) {
        contentstatus= USERS[i].status
      } 
    }
    return contentstatus
  }


  console.log("**************************ShowProfil => ",showProfil);



  // console.log("isConnect => ",isConnect);
  // console.log("setIsConnect => ",setIsConnect);
  // console.log("email => ",email);
  // console.log("setEmail => ",setEmail);
  // console.log("password => ",password);
  // console.log("setPassword => ",setPassword);
  // console.log("status => ",status);
  // console.log("setStatus => ",setStatus);

  // const get_email = "lionnelnoumechi@gmail.com"
  const get_email = checkEmail(email);
  // const get_pwd = "1234"
  const get_pwd = checkPassword(password);

  // const get_status = "teacher"
  const get_status = getStatus(email)
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // console.log("*******FUNCTION VALUE*******");
    // console.log("isConnect => ",isConnect);
    // console.log("setIsConnect => ",setIsConnect);
    // console.log("email => ",email);
    // console.log("setEmail => ",setEmail);
    // console.log("password => ",password);
    // console.log("setPassword => ",setPassword);
    // console.log("status => ",status);
    // console.log("setStatus => ",setStatus);

    event.preventDefault();
    if (password !== get_pwd || email !== get_email) {
      setError(true);
      // setError('Please enter correct details!');
      console.log("**********Désolé vos informations sont incorrect !**********");
      setIsConnect(false)
    } else {
      if (get_status === 'teacher') {
        // setIsConnectPro(true)  
      console.log("**********you are a TEACHER**********");
      navigate('/userhome')
    }else if (get_status === 'student') {
        // setIsConnect(true)
      console.log("**********you are a STUDENT**********");
      navigate('/student')
    }
      // TODO: Send signup request to server
      console.log("**********Login successful'**********");
      setError('Login successful');
      setShowProfil(true)
  console.log("**************************ShowProfil => ",showProfil);
  // setEmail('');
      // setPassword('');
    }
    if(!isConnect && get_email && get_pwd){
      setIsConnect(true)
      setShowProfil(true)
  console.log("**************************ShowProfil => ",showProfil);
  // alert("connecter " + !isConnect + " "+ checkEmail(email) +" "+ checkPassword(password))
    }else{
      // alert("connexion error" + !isConnect + " "+ checkEmail(email) +" "+ checkPassword(password))
    }
  };


  return (
    <div>
      <div className='loginbox'>
       <div className='logo'>CourShare</div>
        <div className='box'>
          <h2 className='marge'>Connexion</h2>
          {error && <h6 className='text-error'>**Désolé vos informations sont incorrecte !**</h6>}
          
          <input 
            type='email' 
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} 
            className='form input' 
            placeholder='Email'
            required/>
          <input 
            type='password' 
            className='form input' 
            placeholder='Mot de passe'
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required/>
          <button className='btn btn-action' onClick={handleSubmit}>Se connecter</button>
          <span className='msgline'>Vous n'avez pas de compte ?</span>
          <Link to="/register" className='restyle'><button className='btn btn-action color2'>Créer un compte</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Login