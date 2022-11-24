import './CreateAccount.css'

import React from 'react'
import { useState , } from 'react';
import {auth, storage, db} from '../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {collection, addDoc, setDoc, doc} from 'firebase/firestore'



function CreateAccount() {


    const [email,registerEmail] = useState("");
    const [password,registerPassword] = useState("");
    const [role,setRole] = useState("Developer");
    const [nameofuser,registerUserName] = useState("");


    const usercollectionref = collection(db,"users");
    const navigate = useNavigate();








    const handlecreation = (e) =>{
        e.preventDefault();


        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          if(role == 'Developer')
          {
          navigate("/devhome",{state:
            {nameofcurruser:nameofuser,
              nameofrole:role,
              emailofuser:email
            }
          });
          }
          else
          {
            navigate("/testerhome",{state:
              {nameofcurruser:nameofuser,
                nameofrole:role
              }
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });    
        setDoc(doc(usercollectionref,email),
          {
            username:nameofuser,
            useremail:email,
            userrole:role,
            rewards:0,
            reputation:0
          }
        )
    }













  return<>
    <div className='createacccontainer'>
        <h1>Create Account</h1>
        <form className='createaccform' onSubmit={handlecreation}>
            <input type="email" placeholder='type email' onChange={e => registerEmail(e.target.value)}/>
            <input type="password" placeholder='type password' onChange={e => registerPassword(e.target.value)}/>
            <label >Select your role</label>
            <select onChange={(e) => setRole(e.target.value)}>
              <option value="Developer">Developer</option>
              <option value="Tester">Tester</option>

            </select>
            <input type="text" placeholder='Username goes here' onChange={e => registerUserName(e.target.value)}/>

            <button type='submit' className='createbutton'>Create Account</button>
            <button onClick={() => navigate("/")} className='anchor'>Already have an account?Log In</button>

        </form>




    </div>
  
  
  
  </>
}

export default CreateAccount