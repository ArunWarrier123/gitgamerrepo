import React from 'react'
import { useState } from 'react'
import { db, firebaseConfig } from '../firebase-config';
import { collection, getFirestore , getDocs , limit, orderBy,query, getDoc} from 'firebase/firestore';
import { Firestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

import '../Components/Fetch.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';


export function acquiredata(data)
{
  // const oneobj = getDoc(productcollectionref)
  console.log(data);
}


function Fetch(props) {

  let statusofrewards = props.currewards;
  let currenttestername = props.currtester;
  // console.log("here is " + statusofrewards);
    const navigate = useNavigate();

    const productcollectionref = collection(db,'products');
    let isVisible = false;
  const [allDocs,setAllDocs] = useState([]);  

  const [data,setData] = useState([]);
  
    //useeffect
    useEffect(()=>{
        const getAllDocs = async ()=>{
            const data = await getDocs(productcollectionref);    
            setAllDocs(data.docs.map((doc)=>({...doc.data(),id: doc.id})));
            acquiredata();
          };
        getAllDocs();
    },[])

    

    const gotoproductpage = (titlebro,durbro,descbro,rewbro,imgbro,testbro,linkbro,emailofcreator,nameoftester)=>{
        navigate('/productpage',{state:{
          gametitle:titlebro,
          gameduration:durbro,
          gamedescription:descbro,
          gamerewards:rewbro,
          gamepic:imgbro,
          gamecases:testbro,
          gamedownload:linkbro,
          rewardstatus:statusofrewards,
          devemail:emailofcreator,
          testername:nameoftester,
        }
        })
        console.log(emailofcreator);
    }

  
  
  return<>
    

  
    <div className='forflex'>
    {
        allDocs && allDocs.map(curdoc=>{
          return(
           
            <div className="blog-container">
                <div>
              <h4>{curdoc.title}</h4>
              {/* <p>{curdoc.rewards}</p> */}
             <button onClick={() => gotoproductpage(curdoc.title,curdoc.duration,curdoc.description,curdoc.rewards,curdoc.imageurl,curdoc.testcases,curdoc.gamelink,curdoc.gamedev,currenttestername)} className='onlyborder'> <img src={curdoc.imageurl} alt="" className='poster'/></button>
              </div>
            </div>
          )
        })
      }

</div>
     </>
}

export default Fetch