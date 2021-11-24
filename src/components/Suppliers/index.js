import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Supplier from './Supplier';

import { getAllSuppliersAction } from '../../store/actions/suppliersActions';

const Suppliers = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      const getAllSuppliers = () => dispatch(getAllSuppliersAction());
      getAllSuppliers();
    }, []);
  
    const { loading, error, suppliers } = useSelector((state) => state.suppliers);
  
  return (
    <div>
      <>
        <h2 className='text-center my-5'>Listado de Proveedores</h2>
      {loading ? <h4 className='text-center'> Loading... </h4> : null}

      {error ? (
        <p className='alert alert-danger p-2 m-4 text-center'>
          Ocurrio un error.
        </p>
      ) : null}

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
          {suppliers.length === 0
            ? 'No hay Proveedores para mostrar'
            : suppliers.map((supplier) => (
                <Supplier key={supplier._id} supplier={supplier} />
              ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default Suppliers;
