import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';


const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
        .then()
        .catch(error => console.log(error));
}


    return (
        <Container >
        <Navbar className='d-flex justify-content-between' bg="transparent" expand="lg">
      <div>
        <div className='mx-auto d-flex align-items-center'>
        <img
            src="https://image.pngaaa.com/666/195666-middle.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="Logo"
          />
      <Navbar.Brand href="/">Metro Rail</Navbar.Brand>
        </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>

      <div >
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="mx-auto d-flex align-items-center">
          <Nav.Link active={window.location.pathname === '/'} href="/">
          Home
          </Nav.Link>
          <Nav.Link  active={window.location.pathname === '/blog'} href="/blog">
          Blog
          </Nav.Link>

<Nav.Link>
          {
            user && <OverlayTrigger
            key='top'
            placement='bottom'
            overlay={<Tooltip id={`tooltip-top`}>{user.displayName}</Tooltip>}
          >
            <img
            src={user.photoURL}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          </OverlayTrigger>
          }
          
          </Nav.Link>
          <Nav.Link>
          {
            user ? 
            <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
            <Link to="/login">
                <Button variant="secondary">Login</Button>
            </Link>
          }
          
          
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
        </Container>
        
    );
};

export default Header;