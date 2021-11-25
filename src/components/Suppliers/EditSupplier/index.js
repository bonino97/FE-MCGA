import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editSupplierAction } from '../../../store/actions/suppliersActions';

const EditSupplier = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [supplierState, setSupplier] = useState({
    _id: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const { loading, error, selectedSupplier } = useSelector(
    (state) => state?.suppliers
  );

  useEffect(() => {
    setSupplier(selectedSupplier);
  }, [selectedSupplier]);

  if (!supplierState) return history.push('/');

  console.log(supplierState);

  const { name, lastName, email, phone } = supplierState;

  const onFormChange = (e) => {
    console.log(e.target.value);
    setSupplier({
      ...supplierState,
      [e.target.name]: e.target.value,
    });
  };

  const editSupplier = (supplier) => dispatch(editSupplierAction(supplier));

  const onSubmit = (e) => {
    e.preventDefault();

    //Validar formulario.
    if (
      name.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === ''
    )
      return;

    //Si no hay errores.
    //Crear Proveedor.
    const supplier = {
      _id: supplierState._id,
      name,
      lastName,
      email,
      phone,
    };

    editSupplier(supplier);
    // Redireccionar a la lista de proveedors.
    history.push('/suppliers');
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8 p-4'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Editar Proveedor
            </h2>

            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <label>
                  Nombre Proveedor <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre del Proveedor'
                  name='name'
                  value={name}
                  onChange={onFormChange}
                />
              </div>

              <div className='form-group'>
                <label>
                  Apellido Proveedor <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Apellido del Proveedor'
                  name='lastName'
                  value={lastName}
                  onChange={onFormChange}
                />
              </div>

              <div className='form-group'>
                <label>
                  Email Proveedor <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Email del Proveedor'
                  name='email'
                  value={email}
                  onChange={onFormChange}
                />
              </div>

              <div className='form-group'>
                <label>
                  Telefono Proveedor <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Telefono del Proveedor'
                  name='phone'
                  value={phone}
                  onChange={onFormChange}
                />
              </div>

              <div className='form-group text-center'>
                <span className='font-weight-bold text-danger'>
                  * Campos Requeridos
                </span>
              </div>

              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Agregar
              </button>
            </form>
            {loading ? <p> Loading... </p> : null}

            {error ? (
              <p className='alert alert-danger p-2 m-4 text-center'>
                Ocurrio un error.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSupplier;
