import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <i className='fas fa-hiking'></i> Happy in Wild
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/about'>
                <Nav.Link>
                  <i className='fas fa-user'></i> About Us
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <>
                  <LinkContainer to='/cart'>
                    <Nav.Link>
                      <i className='fas fa-mountain'></i> My Trips
                    </Nav.Link>
                  </LinkContainer>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {userInfo && userInfo.isAdmin && (
        <Navbar bg='secondary' variant='light' expand='lg' collapseOnSelect>
          <Container>
            <Navbar.Brand>
              <i className='fas fa-user-cog' style={{ color: '#eea29a' }}></i>{' '}
              Admin Menu
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <LinkContainer to='/admin/userlist'>
                  <Nav.Link>
                    <i
                      className='fas fa-user-friends'
                      style={{ color: '#eea29a' }}></i>{' '}
                    Users
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/admin/productlist'>
                  <Nav.Link>
                    <i className='fas fa-gift' style={{ color: '#eea29a' }}></i>{' '}
                    Products
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/admin/orderlist'>
                  <Nav.Link>
                    <i
                      className='fas fa-money-check-alt'
                      style={{ color: '#eea29a' }}></i>{' '}
                    Orders
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </header>
  )
}

export default Header
