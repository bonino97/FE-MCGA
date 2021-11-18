import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
      <div className='container'>
        <h1>
          <Link to={'/'} className='text-light'>
            MCGA
          </Link>
        </h1>
      </div>

      <Link
        to={'/clients/new'}
        className='btn btn-danger nuevo-post d-block d-md-inline-block'
      >
        Nuevo Cliente &#43;
      </Link>
    </nav>
  );
};

export default Header;
