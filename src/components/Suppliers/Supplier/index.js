import React from 'react';

const Supplier = () => {
  return (
    <tr>
      <td>
        <span className='font-weight-bold'><p>Nombre x</p></span>
      </td>
      <td><p>Email x</p></td>
      <td>Telefono x</td>
      <td className='actions'>
        <button
          type='button'
          onClick=''
          className='btn btn-primary m-1'
        >
          Editar
        </button>
        <button
          type='button'
          className='btn btn-danger m-1'
          onClick=''
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Supplier;
