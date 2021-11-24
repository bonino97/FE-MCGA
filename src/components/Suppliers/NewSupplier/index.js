import React from 'react';

const NewSupplier = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8 p-4'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Agregar Nuevo Proveedor
            </h2>

            <form onSubmit=''>
              <div className='form-group'>
                <label>
                  Nombre Proveedor <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre del Proveedor'
                  name='name'
                  value='name'
                  onChange=''
                />
              </div>

              <div className='form-group'>
                <label>
                  Correo Electr&oacute;nico <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Apellido del Proveedor'
                  name='email'
                  value='email'
                  onChange=''
                />
              </div>

              <div className='form-group'>
                <label>
                  Tel&eacute;fono <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Email del Proveedor'
                  name='phone'
                  value='phone'
                  onChange=''
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

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSupplier;
