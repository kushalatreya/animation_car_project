/* licence for the logo: */
/* <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>. */

import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import { ButtonWrapper, NavWrapper} from '../components/StyledComponent.js'

export default function NavBar() {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-4">
      <Link to="/">
        <img src={logo} alt="store" className='navbar navbar-brand'  />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to='/' className='nav-link'>Product</Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
        <ButtonWrapper>
          <i className="fas fa-cart-plus">Reservation</i>
        </ButtonWrapper>
      </Link>
    </NavWrapper>
      
  )
}
