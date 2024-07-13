import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand fw-bold fs-3" to={"/"}>CRUD App In Laravel with React JS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-5 ">
        
        
      </div>
    </div>
  </div>
</nav>
    </>
  );
}

export default Header;
