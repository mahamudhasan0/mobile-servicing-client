import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item active">
          <Link className="nav-link ms-5" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-5" to='' >About</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link ms-5" to='' >Services</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link ms-5" to=''>Reviews</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link ms-5" to=''>Sample</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link ms-5" to=''>Contact us</Link>
        </li>     
      </ul>
    </div>
  </div>
</nav>

    );
};

export default Navbar;
