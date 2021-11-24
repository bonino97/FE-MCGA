import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Supplier from './Supplier';

const Suppliers = () => {
  return (
    <div>
      {' '}
      <>
        <h2 className='text-center my-5'>Listado de Proveedores</h2>

        <div className='row pb-2'>
          <div className='col-12 text-right'>
            <Link
              to={'/suppliers/new'}
              className='btn btn-danger nuevo-post d-block d-md-inline-block'
            >
              Nuevo Proveedor &#43;
            </Link>
          </div>
        </div>

        <table className='table table-striped'>
          <thead className='bg-primary table-dark'>
            <tr>
              <th scope='col'>Nombre</th>
              <th scope='col'>Email</th>
              <th scope='col'>Tel&eacute;fono</th>
              <th scope='col'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <Supplier/>
          </tbody>
        </table>
      </>
    </div>
  );
};

export default Suppliers;
