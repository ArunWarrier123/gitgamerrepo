import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import Link from 'react-router-dom';


function NavBar(props) {
    return <>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="nameofsite">GamersZone</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      {/* <Link to='/login'>Gamers Zone</Link> */}
      <div className="sections">
      {/* className="me-auto"  of nav has been removed*/}
        <Nav>  
           <Nav.Link href="/" className="nameofsection">Home</Nav.Link>
          <Nav.Link href="/" className="nameofsection">Tests</Nav.Link>
          <Nav.Link href="/" className="nameofsection">Messages</Nav.Link>            
          <div className='status'>
            <div>{props.myname}</div> 
            <div>{props.myrole}</div>
          </div>
        </Nav>
        </div>
      </Navbar.Collapse>
    
  </Navbar>
  </>
}

export default NavBar