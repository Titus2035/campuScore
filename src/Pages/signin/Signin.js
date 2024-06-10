import React from 'react'
import './signin.css';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const Signin = () =>{
  return (
    <div>
      <div className='loginbox'>
        <div className='logo'>CourShare</div>
        <div className='box'>
          <h2 className='marge'>Inscription</h2>
          
          <input type='text' className='form input' placeholder='Nom'required/>
          <input type='text' className='form input' placeholder='Prenom'/>
          <input type='tel' className='form input' pattern='[0-9]{9}' placeholder='Numéro de téléphone' required/>
          <input type='email' className='form input'pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Veuillez saisir une adresse e-mail valide"  placeholder='Email'required/>
          <select className='form input select'required>
            <option>Sexe</option>
            <option>Homme</option>
            <option>Femme</option>
          </select>
          <select className='form input select'required>
            <option>status</option>
            <option>Eleve</option>
            <option>Enseignant</option>
          </select>
          <input type='password' className='form input' placeholder='Mot de passe'/>
          <button className='btn btn-action'>S'inscrire</button>
          <span className='msgline'>Vous avez déjà un compte ?</span>
           <Link to="/login" className='restyle'><button className='btn btn-action color2'>Se connecter</button></Link>
        </div>
      </div>
    </div>
    
  )
}


export default Signin;
