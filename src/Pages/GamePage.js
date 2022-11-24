import React from 'react'
import NavBar from '../Components/NavBar'

import emailjs from '@emailjs/browser';
import '../Pages/GamePage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection } from 'firebase/firestore';
import { db } from '../firebase-config';



export function updatebalance(currewardinstring,testreward)
{
    let currentrewardbalance = parseInt(currewardinstring);
     console.log(currentrewardbalance);
     let gameplayreward = parseInt(testreward);
     currentrewardbalance = currentrewardbalance + gameplayreward;

     return currentrewardbalance.toString();
}

function GamePage(props) {

   const location =  useLocation(); 
   const navigate = useNavigate();

//    const usercollectionref = collection(db,'users');

    // console.log(props.);
    let tempmail = location.state.devemail;
    console.log(tempmail);

    const sendfeedback = (e) =>{
        e.preventDefault();
        console.log("this is e.target " + e.target);
        emailjs.sendForm('service_ehi676f', 'template_lgwl6fv', e.target, 'TzLJYrdFE1Ou50uEy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });     

      navigatetopage();
    }

    const navigatetopage = () =>{
    let currentrewardbalance = updatebalance(location.state.rewardstatus,location.state.gamerewards);
      
     navigate("/testerhome",{state:
        {nameofcurruser:location.state.testername ,
          rewardbalance:currentrewardbalance
        }});
    }


    let imagecopy = location.state.gamepic;
    let gamelinkcopy = location.state.gamelink;

    console.log(location.state.gamedownload);
  return <>
  <NavBar/>
  <div className='fullpage'>
    <div className='game-title'>
        {/* props.title */}
        {location.state.gametitle}
    </div>
    <div className='detail-container'>
        <div><img src={imagecopy} className='cardimg'/></div>
        
        <div className='card-details'>
            <div className='justpad'>{location.state.gametitle}</div>{/* props.title */}
            <div>            
            <div>Estimated Duration</div>
            <div>{location.state.gameduration} minutes</div>{/* props.duration */}
            </div>
            <div>
            <div>Rewards</div>
            <div>{location.state.gamerewards}Xp</div>{/* props.rewards */}
            </div>


            <a href= {location.state.gamedownload}><button> DOWNLOAD </button></a>
            <div>{gamelinkcopy}</div>
        </div>
    </div>

    <div className='desc-div'>
        <div className='actualdesc'>
            <h1>HOW IT WORKS</h1>
            {location.state.gamedescription}
        </div>
        <div className='testcasediv'>
        <h1>TEST CASES</h1>
        {location.state.gamecases}
        </div>
    </div>

    <form onSubmit={sendfeedback}>
    <textarea className='feedback-area' id="" cols="30" rows="10" placeholder='Type Feedback here' name='feedback'></textarea>
    <input type="text" name="mailid" defaultValue={tempmail}  data-testid = 'inptest' hidden/>
    <button data-testid = 'yes'> SEND FEEDBACK</button>

    </form>


    </div>
    </>
}

export default GamePage