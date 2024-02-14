import {Nav, Navbar, Container,} from 'react-bootstrap';
import logo from '../../img/logo.png'

const Header = () =>{

      return(
        <div className="Header">
            <Navbar  fixed="top"  data-bs-theme="light" expand="md" className='navbar-design'>
            <Container>
            <Navbar.Brand href="#home" >
                <img src={logo} alt="logo" width='120px'/>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className="ms-auto" >
        
                        <Nav className="d-none d-md-block vr" />
                        <Nav.Link href=""className="text-md-lg">SIGN UP</Nav.Link>
                        <Nav.Link href=""className="text-md-lg">LOGIN</Nav.Link>
                </Nav>            
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
      )

}

export default Header