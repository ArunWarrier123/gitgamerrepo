import '../Components/TesterHomePage.css'
import NavBar from '../Components/NavBar'

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function TesterHomePage(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const gotobrowse =(e) =>{
        navigate("/browsepage",{state:{
          nameofuser:location.state.nameofcurruser,
          currewards: location.state.rewardbalance,
        }});
    } 

  return <>
<NavBar myname={location.state.nameofcurruser} myrole={location.state.rewardbalance}/>    

    <div className='showoff'>
        <div className='textarea'>
            <h1>TEST GAMES AND GET REWARDS </h1>
            <h5>COLLABORATION MADE EASIER</h5>
            <button onClick={gotobrowse} className='startbutton'>GET STARTED</button>
        </div>
    </div>

  </>
}

export default TesterHomePage