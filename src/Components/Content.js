import React from 'react'
import { FaDownload, FaFile, FaSearch, FaTrash, FaUpload } from 'react-icons/fa'
import USERS from '../constantes/users'
import FILES from '../constantes/files';

const Content = ({email, showProfil, setShowProfil, status, setStatus}) => {

  console.log("**************************ShowProfil => ",showProfil);

    const getName = (email) => {
        let contentname= " "
        for (let i = 0; i < USERS.length; i++) {
          if (USERS[i].email === email) {
            contentname= USERS[i].name;
            setShowProfil(true);
  console.log("**************************ShowProfil => ",showProfil);
} 
        }
        return contentname
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

      const get_status = getStatus(email)

      const get_name = getName(email);
      console.log("**************************ShowProfil => ",showProfil);
      console.log("**************************email => ", email);
      console.log("**************************status => ",get_status);


  return (
    
    <div className='content'>
        <div className='contentx'>
            <div className='headcontent'>
                <div className='searchbloc'>
                <i/><FaSearch className="sicon"/>
                    <input type='text' name='filter' placeholder='Rechercher un cours' className='form input filter'/>
                </div>
                <input type='file' hidden id='add'/>
                {get_status === "teacher" ? <label htmlFor='add' className='btn btn-add'><FaUpload className='siconup'/> Ajouter un cours</label> : <div></div>}
            </div> <br/>
            <div className='bodcontent'>
            {[...FILES].map((file) => (
                 <div className='file'>
                 <div className='fileline'>
                     <div className='group'>
                         <div className='icon'><i className="fab fa-github" /><FaFile/></div>
                         <div className='filenamebox'>
                             <div className='filename'>{file.name}</div>
                             <div className='filesize'>{file.size} Ko <span className='date'>- {file.date}</span></div>
                         </div>
                     </div>
                     <div className='fileaction'>
                        {get_status === "teacher" ? <button className='btn btn-faction delbtn'><i className="fab fa-github" /><FaTrash/></button> : <div></div>}
                         <button className='btn btn-faction downloadbtn'><i className="fab fa-github" /><FaDownload/></button>
                     </div>
                 </div>
                 
             </div>
            ))}

            </div>
      </div>
    </div>
  )
}

export default Content
