import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Supplier from './Supplier';
import NewSupplier from './NewSupplier';

import { getAllSuppliersAction } from '../../store/actions/suppliersActions';
import { addNewSupplierAction } from '../../store/actions/suppliersActions';

const Suppliers = () => {
  const [showNewSupplier, setShowNewSupplier] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllSuppliers = () => dispatch(getAllSuppliersAction());
    getAllSuppliers();
  }, []);

  const { loading, error, suppliers } = useSelector((state) => state.suppliers);

  // Llama el action.
  const addNewSupplier = (supplier) => dispatch(addNewSupplierAction(supplier));

  const addSupplier = (supplier) => {
    addNewSupplier(supplier);
  };

  // onClick function to set showNewSupplier
  const onClick = () => {
    setShowNewSupplier(!showNewSupplier);
  };


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

        {showNewSupplier && <NewSupplier onAdd={addSupplier} />}
        <div className='row pb-2'>
          <div className='col-12 text-center'>
            <button
              className={
                showNewSupplier
                  ? 'btn btn-danger nuevo-post d-block d-md-inline-block'
                  : 'btn btn-primary m-1'
              }
              onClick={onClick}
            >
              {showNewSupplier
                ? 'Cancelar Agregar Proveedor'
                : 'Agregar Proveedor'}
            </button>
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
