import { Routes,BrowserRouter as Router, Route } from "react-router-dom";
import CreateTestPage from "./Pages/CreateTestPage";
import Login from "./Pages/Login";
import DeveloperHomePage from "./Pages/DeveloperHomePage";
import CreateAccount from "./Pages/CreateAccount";
import GamePage from "./Pages/GamePage";
import TesterHomePage from "./Pages/TesterHomePage";
import BrowseProductPage from "./Pages/BrowseProductPage";
import FetchTest from "./Components/FetchTest";
function App() {
  // const [curusername,setcurrsername] = useContext(usernamecontext);

  return (

    <>

    <Router>
      <Routes>
        {/* <usernamecontext.Provider> */}
        <Route path="/" element={<Login/>}/>
        <Route path="/createaccount" element={<CreateAccount/>}/>
        <Route path="/devhome" element={<DeveloperHomePage/>}/>
        <Route path="/createtest" element={<CreateTestPage/>}/>
        <Route path="/productpage" element={<GamePage/>}/>
        <Route path="/testerhome" element={<TesterHomePage/>}/>
        <Route path="/browsepage" element={<BrowseProductPage/>}/>


        {/* </usernamecontext.Provider> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
