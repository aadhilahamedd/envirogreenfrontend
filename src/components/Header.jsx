import React, { useContext, useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import Cart from './Cart'
import { CartContext } from '../Features/ContextProvider'
import { useNavigate } from 'react-router-dom'

function Header() {
  const { setSearchKey } = useContext(CartContext)
  const [localSearch, setLocalSearch] = useState("")
  const navigate = useNavigate()

  const userString = sessionStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  const handleLogout = () => {
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("token")
    navigate('/')
    window.location.reload()
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchKey(localSearch)
    if (localSearch.trim()) {
      navigate('/viewall')
    }
  }

  return (
    <Navbar className="bg-primary" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9r2Fc2inX7E_hpsUwb_tYwoP6Y0Ak6Ia4ig&s/img/logo.svg"
            width="50"
            height="50"
            className="d-inline-block align-top rounded-circle"
            alt="React Bootstrap logo"
          />
          <div style={{ fontFamily: "Josefin Sans" }} className='ms-3 text-light'>
            <h3 className='mb-0 text-secondary'>Enviro<span className='text-success'>green</span></h3>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mt-3 mt-lg-0 ms-lg-4 d-flex align-items-center">
            <Nav.Link href="/" className="text-light fs-5 mx-2">Home</Nav.Link>
            <Nav.Link href="/category" className="text-light fs-5 mx-2">Category</Nav.Link>
            {user?.role === 'admin' && (
              <Nav.Link href="/admin" className="text-light fs-5 mx-2">Admin Panel</Nav.Link>
            )}
          </Nav>
          
          <Form className="d-flex my-2 my-lg-0 align-items-center" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search plants..."
              className="me-2 bg-light text-dark"
              aria-label="Search"
              value={localSearch}
              onChange={(e) => {
                setLocalSearch(e.target.value)
                setSearchKey(e.target.value) // Live search
              }}
              style={{ width: "250px" }}
            />
            <Button variant="outline-light" type="submit">Search</Button>
            
            <div className="ms-3 mt-2 mt-lg-0 d-flex align-items-center">
              {user ? (
                <>
                  <span className="text-light fw-bold mx-3 fs-5">Hi, {user.username}</span>
                  <Button variant="danger" size="sm" onClick={handleLogout} className="me-3">Logout</Button>
                </>
              ) : (
                <Nav.Link href="/login" className="text-light fs-5 mx-3 border border-light rounded px-3 py-1">Login</Nav.Link>
              )}
              <Cart />
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
