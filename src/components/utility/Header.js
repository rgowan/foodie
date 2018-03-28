import React from 'react';
import { Link } from 'react-router-dom';

const Header = (

) => (
  <header>
    <h1><Link to="/">foodie</Link></h1>
    <h2>For the <span>foodie</span> in everyone...</h2>
    <hr />
    <i className="fa fa-cutlery"></i>
  </header>
);

export default Header;
