import React from 'react'
import '../Components/CreateTest.css'
import { collection } from 'firebase/firestore';
import { addDoc , setDoc , doc} from 'firebase/firestore';
import { db, storage } from '../firebase-config';
import { useState, } from 'react';
import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';



export   const productscollectionref = collection(db,"products");



export function UploadGame(productscollectionref,des,dur,rew,testc,title,imgurl,gameurl,mail){

   console.log(mail);
    // console.log(gamelinkurl.length);        
    const fs = [des,dur,rew,testc,title,imgurl,gameurl,mail];
    return fs;            
    }





function CreateTestPage(props) {
  let finalgameurlinstring = "";
  let finalimageurl = "";
  const location = useLocation();
  const navigate = useNavigate();
  // let curmail = ;
  //  console.log(curmail);
  let instringurl = "";
  //game details states
  const [gametitle,setTitle] = useState("");
  const [gameimage,setImage] = useState(null);
  const [gameimageURL,setimageURL] = useState("");
  const [gamelinkurl,setGameLink] = useState(null);
  const [gamelinkinstring,setGameLinkinString] = useState("");
  const [gamedescription,setDescription] = useState("");
  const [gameduration,setDuration] = useState("");
  const [gamerewards,setRewards] = useState("");
  const [gametestcases,setTestCases] = useState("");

  const [percent, setPercent] = useState(0);


  

  // const productscollectionref = collection(db,"products");







  const uploadimage = () =>{

    const uniquename = new Date().getTime() + gameimage.name;
    console.log("upload image is called by create test on clicking submit YAY!");
    
  


    const storageRef = ref(storage, `/files/${uniquename}`);
 
        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, gameimage);
 
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
 
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                  // console.log(url);      
                    // setimageURL(url);
                    console.log("this is image url returned " + url);
                    console.log("this is current mail " + location.state.emailuser);
                    finalimageurl = url;
                  });
            }
        );
  }

  const uploadgamelink = () => {

    const uniquenamegame = new Date().getTime() + gamelinkurl.name;
    console.log("uploaded link of game is called by create test on clicking submit YAY!");
    


    const storageRef = ref(storage, `/games/${uniquenamegame}`);
 
        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, gamelinkurl);
        console.log(gamelinkurl + "now creating the link url");
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
 
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log("this is url returned by function of game " + url);
                  //   finalgameurlinstring = url;

                    
                    finalgameurlinstring = url;
                    console.log(finalgameurlinstring + "this is url in doc shuld be same as above");
                  });
        
            }
        );
        return true
  }






  const StoreData = async () => {
    uploadgamelink();
    uploadimage();
    // let mymail = location.state.emailofuser;
    // console.log("this is mymail " + location.state.emailofuser);
    setTimeout(() => {
    UploadGame(productscollectionref,gamedescription,gameduration,gamerewards,gametestcases,gametitle,finalimageurl,
      finalgameurlinstring,location.state.emailuser)
    }, 20000);


    addDoc((productscollectionref),
      {description:gamedescription,
       duration:gameduration,
        rewards:gamerewards,
        testcases:gametestcases,
        title:gametitle,
        imageurl: finalimageurl,
        gamelink: finalgameurlinstring,
        gamedev: location.state.emailuser
      })
    gobacktohome();

  };






    const gobacktohome = () =>{
      navigate("/devhome",{state:{
        nameofcurruser: location.state.username,
        nameofrole: location.state.nameofrole,
        emailofuser: location.state.emailuser
      }})
    }
  




  return <>
  <NavBar myname={location.state.nameofuser} myrole={location.state.userrole}/>
  <div className='maindiv'>
    <div><img src=""/></div>
    <div className='formdetails'>
    <div className='form-field'>
    <label htmlFor="">Title</label>
    <input type="text" placeholder='Type Title Here..' onChange={(e) => {{setTitle(e.target.value)}}}/>
    </div>
    <div className='form-fieldimage'>
    <label htmlFor="">Upload Game Poster</label>
    <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
    </div>
    <div className='form-field'>
    <label htmlFor="">Estimated Duration</label>
    <input type="text" placeholder='Type Duration Here..' onChange={(e) => {{setDuration(e.target.value)}}} />
    </div>
    <div className='form-field'>
    <label htmlFor="">Rewards(XP)</label>
    <input type="text" placeholder='Type rewards Here..'  onChange={(e) => {{setRewards(e.target.value)}}}/>
    </div>
    <div className='form-fieldwithlabel'>
    <label htmlFor="">Description</label>
    <textarea name="Description Of Test" id="" cols="30" rows="10" onChange={(e) => {{setDescription(e.target.value)}}}></textarea>
    </div>
    <div className='form-fieldwithlabel'>
    <label htmlFor="">Mechanisms To<br></br>Test</label>
    <textarea name="Testcases" id="" cols="30" rows="10" onChange={(e) => {{setTestCases(e.target.value)}}}></textarea>
    </div>
    <div className='form-fieldimage'>
    <label htmlFor="">Upload Game Link</label>
    <input type="file" onChange={(e) => setGameLink(e.target.files[0])}/>
    </div>
    <button className='submit-button' onClick={StoreData}>Submit</button>

  </div>
  </div>
   
  {/* form details done */}

  </>
    
  
}

export default CreateTestPage