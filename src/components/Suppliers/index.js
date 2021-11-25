import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Supplier from './Supplier';
import NewSupplier from './NewSupplier';
import NewSupplierForm from './NewSupplier/NewSupplierForm';

import { getAllSuppliersAction } from '../../store/actions/suppliersActions';
import { addNewSupplierAction } from '../../store/actions/suppliersActions';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadows: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%',
  },
}));

const Suppliers = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalFF, setShowModalFF] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllSuppliers = () => dispatch(getAllSuppliersAction());
    getAllSuppliers();
  }, []);

  const { loading, error, suppliers } = useSelector((state) => state.suppliers);

  // Llama el action.
  const addNewSupplier = (supplier) => dispatch(addNewSupplierAction(supplier));

  //crea nuevo supplier para formulario hecho con react form
  const addSupplier = (supplier) => {
    addNewSupplier(supplier);
    openCloseModal();
  };

  //modal para formulario hecho con react form
  const openCloseModal = () => {
    setShowModal(!showModal);
  };

  //crea nuevo supplier para formulario hecho con final forms
  const addSupplierFF = (supplier) => {
    addNewSupplier(supplier);
    openCloseModalFF();
  };

  //modal para formulario hecho con final forms
  const openCloseModalFF = () => {
    setShowModalFF(!showModalFF);
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

        <div className='row pb-2'>
          <div className='col-12 text-center'>
            <button className='btn btn-primary m-1' onClick={openCloseModal}>
              Agregar Proveedor (React Forms)
            </button>
            <Modal open={showModal} onClose={openCloseModal}>
              <NewSupplier onAdd={addSupplier} />
            </Modal>
            <button className='btn btn-primary m-1' onClick={openCloseModalFF}>
              Agregar Proveedor (Final Forms)
            </button>
            <Modal open={showModalFF} onClose={openCloseModalFF}>
              <NewSupplierForm onAdd={addSupplierFF} />
            </Modal>
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
