import { NavLink } from 'react-router-dom';

import React from 'react';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink
        to={`/`}
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        {' '}
        Home
      </NavLink>
      <NavLink to={`/about`}> About</NavLink>
      <NavLink to={`/products`}> Products</NavLink>
      <NavLink to={`/login`}> Login</NavLink>{' '}
    </nav>
  );
}
