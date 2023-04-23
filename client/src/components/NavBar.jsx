import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container fluid>

      <Navbar.Brand href="#" style={{"color":'#FF385C'}}>Vente de vêtements</Navbar.Brand>


        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <div className='nav' style={{"display":'flex',"margin-left":'80px', "padding":'10px'}}>
            
            <strong><Nav.Link href="#action1"style={{"color":'black',"margin-right":'50px',}}>
                    
                        Femmes
            
                   </Nav.Link>
            </strong>
            <strong><Nav.Link href="#action2"style={{"color":'black',"margin-right":'50px'}}>Hommes</Nav.Link></strong>
            <strong><Nav.Link href="#action3"style={{"color":'black'}}>Enfants</Nav.Link></strong>
        </div>
            
          </Nav>
          <Form className="d-flex">
           
            <div className='log'style={{"display":'flex', "justify-content":'space-between', "margin":'10px'}}>
                 <Link to="/signin" className="link"><Button variant="outline-success"style={{"background-color":'#FF385C',"color":'black',"margin-right":'40px' }}>Se connecter</Button></Link>
                 <Link to="/signup" className="link"><Button variant="outline-success"style={{"background-color":'#FF385C',"color":'black',"margin-right":'300px'}}>S'inscrire</Button></Link>
             </div>    
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
    // <div className="nav">
    //   <span>
    //     <Link to="/" className="link" id="logo">
    //       Shopkeeper
    //     </Link>
    //   </span>
    //   <div className="links">
    //     <Link className="link">Clothing</Link>
    //     <Link className="link">Footwear</Link>
    //     <Link className="link">Accessories</Link>
    //     <Link to="/signin" className="link">
    //       Sign in
    //     </Link>
    //     <Link to="/" className="link">
    //       Sign up
    //     
    //   </div>
    // </div>
    
  )
}

export default NavBar