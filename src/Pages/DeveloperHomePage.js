
import { useLocation, useNavigate } from "react-router-dom";
import DeveloperHomeDiv from "../Components/DeveloperHomeDiv"
import NavBar from "../Components/NavBar";

function DeveloperHomePage(props) {
  const location = useLocation();
  console.log(location.state.nameofrole);
  const navigate = useNavigate();

  const gototestpage = () =>{
    navigate("/createtest",{state:
      {username:location.state.nameofcurruser,
        nameofrole:location.state.nameofrole,
        emailuser:location.state.emailofuser
      }
    });
  }


    return<>
        <NavBar myname={location.state.nameofcurruser} myrole={location.state.nameofrole}/>
    < DeveloperHomeDiv
      text1="WHAT FOR MESSI" text2="START CREATING NOW" subtext="Create tests of different types for users to playtest and provide feedback on."
      />
      {/* <div>{props.nameofcurruser}</div> */}
      

<button onClick={gototestpage} className='createtestbutton'>Create Test</button>

    </>
}


export default DeveloperHomePage;