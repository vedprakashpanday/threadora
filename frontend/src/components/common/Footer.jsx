import React from 'react'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faMoneyCheckDollar, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
      <footer className='py-5 text-white'>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3 pb-4">
              <img src={Logo} alt="Logo"  width={120} />
              <div className='pt-3 pe-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga distinctio .</div>
            </div>
            <div className="col-md-3 mt-3 pb-4">
              <h3 className='mb-3'>Categories</h3>
              <ul>
                <li><a href="#" >Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Kids</a></li>
              </ul>
            </div>
            <div className="col-md-3 mt-3 pb-4">
                <h3 className='mb-3'>Quick Links</h3>
              <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
               
              </ul>
            </div>
            <div className="col-md-3 mt-3 pb-4">
               <h3 className='mb-3'>Get In Touch</h3>
              <ul>
                <li><a href="#">91-73XXXXX32</a></li>
                <li><a href="#">InfoXX@mail.com</a></li>
               
              </ul>
            </div>
          </div>

          <div className="row spotlight py-5">
            <div className="col-md-4"> 
              <div className="d-flex justify-content-center align-items-center gap-2 py-2">
                <FontAwesomeIcon icon={faTruck} />
                   <h3 className='mt-2'>Free Delivery</h3>
              </div>
             
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-center align-items-center gap-2 py-2">
                <FontAwesomeIcon icon={faMoneyBillWave} />
              <h3 className='mt-2'>Money Back Gaurantee</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-center align-items-center gap-2 py-2">
                <FontAwesomeIcon icon={faMoneyCheckDollar} />
             <h3 className='mt-2'>Secure Payments</h3> 
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center pt-4 mt-4">
              <p>&copy; 2024 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer