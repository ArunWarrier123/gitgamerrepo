import './Login.css';

import React from 'react'
import { useState } from 'react';
import {auth,db} from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getDoc , doc , collection} from 'firebase/firestore';




function Login() {

    const [error,setError] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [currentuserdoc,setcurrentuserdoc] = useState({});

    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        setError(false);
        

        signInWithEmailAndPassword(auth,email,password).then((userCredential) =>{
            const user = userCredential.user;
            console.log(email);
            const docref = doc(db,'users',email);
            getDoc(docref).then((doc) =>{
                console.log(doc.data().userrole);
                if(doc.data().userrole == 'Developer')
                {
                    navigate("/devhome",{state:
                    {nameofcurruser:doc.data().username,
                      nameofrole:doc.data().userrole,
                      emailofuser:email
                    }});
                }
                else{
                    
                    navigate("/testerhome",{state:
                        {nameofcurruser:doc.data().username,
                          rewardbalance:doc.data().rewards
                        }});
                }
            })
            // if(userdocextractdata.exists())
                
        })
        .catch((error) =>{
            console.log(error);
            setError(true);
        })
    }






  return <>
  <div className='logincontainer'>
  <h1>Sign in to Account</h1>
    <form className='loginform' onSubmit={handleLogin}>
        <input type="email" placeholder='Type email here' onChange={e=> setEmail(e.target.value)}/>
        <input type="password" placeholder='Type password here' onChange={e=> setPassword(e.target.value)}/>


        <button type='submit' className='loginbutton'>Login</button>
        {error && <span>Wrong email or password!</span>}
        <button onClick={() => navigate("/createaccount")} className='anchor'>Create An Account?</button>
    </form>



    </div>
    </>
}

export default Login