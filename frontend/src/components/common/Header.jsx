import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faMoneyCheckDollar, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <header className='shadow'>
      <div className='bg-dark text-center py-3'>
        <span className='text-white'>Our Fashion Partners</span>
      </div>
      {/* navbar */}

      <div className="container ">
        <Navbar expand="lg" className="">

          <Navbar.Brand href="/">
            <img src={Logo} alt="Theradora Logo" width={170} height={75} className='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"

              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Men</Nav.Link>
              <Nav.Link href="#action2">Women</Nav.Link>
              <Nav.Link href="#action2">Kids</Nav.Link>


            </Nav>


            <div className="nav-right d-flex">
              <a href="" className='ms-3'>
                <FontAwesomeIcon icon={faUser} />
              </a>
              <Link to="/cart" className='ms-3'>
                <FontAwesomeIcon icon={faCartShopping} />

              </Link>

            </div>
          </Navbar.Collapse>

        </Navbar>

      </div>


    </header>
  )
}

export default Header