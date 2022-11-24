import '../Components/BrowseProductPage.css'
import Fetch from '../Components/Fetch'

import React from 'react'
import NavBar from '../Components/NavBar'
import { useLocation } from 'react-router-dom'

function BrowseProductPage() {

  const location = useLocation();
  return <>
  <NavBar myname={location.state.nameofuser} myrole= {location.state.currewards}/>
  <div>
    <div className='headertext'><h1>EXPLORE ALL GAMES</h1></div>
        <Fetch currewards={location.state.currewards} currtester={location.state.nameofuser}/>
    {/* cards come here */}


  </div>
  
  
  </>
}

export default BrowseProductPage