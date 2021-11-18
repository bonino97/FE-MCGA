import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  deleteClientAction,
  editClientAction,
} from '../../../store/actions/clientsActions';

const Client = ({ client }) => {
  const { _id, name, address, category, description } = client;

  const dispatch = useDispatch();
  const history = useHistory(); // Habilitar history para redireccionar.

  const onDeleteClient = (id) => {
    // preguntar al usuario
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Esta accion es irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        dispatch(deleteClientAction(id));
      }
    });
  };

  const onEditRedirection = (id) => {
    dispatch(editClientAction(client));
    history.push(`/clients/edit/${id}`);
  };

  return (
    <tr>
      <td>
        <span className='font-weight-bold'> {name} </span>
      </td>
      <td>{address}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td className='actions'>
        <button
          type='button'
          onClick={() => onEditRedirection(_id)}
          className='btn btn-primary m-1'
        >
          Editar
        </button>
        <button
          type='button'
          className='btn btn-danger m-1'
          onClick={() => onDeleteClient(_id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Client;
