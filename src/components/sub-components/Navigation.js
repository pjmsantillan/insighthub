import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <div className= "Navigation">
             <Navbar bg='dark' expand="md" >
            <Container>
                <Nav className= "mx-auto justify-content-center ">
                        <Nav.Link as={Link} to="/" className="text-md"style={{color:'White',marginRight:'130px'}}>LASTEST NEWS</Nav.Link>
                        <Nav.Link as={Link} to="/sportcard" className="text-md"style={{color:'White',marginRight:'130px'}}>SPORTS</Nav.Link>
                        <Nav.Link href="/" className="text-md"style={{color:'White',marginRight:'130px'}}>ENTERTAINMENT</Nav.Link>
                        <Nav.Link href="/" className="text-md"style={{color:'White'}}>TECHNOLOGY</Nav.Link> 
                </Nav>      
                      
            </Container>
            </Navbar>
        </div>
    )
    
}

export default Navigation