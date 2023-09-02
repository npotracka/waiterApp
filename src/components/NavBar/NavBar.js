import { Container, Nav, Navbar, NavItem} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg' className='rounded my-4'>
      <Container>
        <Navbar.Brand href='/'>Waiter.app</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavItem>
              <Nav.Link as={NavLink} to='/new_table'>
                Add Table
              </Nav.Link>
            </NavItem>
            <Nav.Item>
              <Nav.Link as={NavLink} to='/'>
                Home
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;