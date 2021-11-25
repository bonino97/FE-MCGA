import React from 'react';
import { Form, Field } from 'react-final-form';
import { required, email } from '../../../utils/validations';

import Button from '../../../shared/Button/Button'
import TextInput from '../../../shared/TextInput/TextInput';

const NewSupplierForm = ({ onAdd }) => {
  const onSubmitSupplier = (values) => {
    console.log(values);

    onAdd(values);
  };

  return (
    <div className=''>
      <Form
        onSubmit={onSubmitSupplier}
        initialValues={{ name: '', email: '', phone: '' }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className=''>
              <Field
                name='name'
                component={TextInput}
                placeholder='Nombre del Proveedor'
                label='Nombre:'
                validate={required}
              />
            </div>
            <div className=''>
              <Field
                name='email'
                component={TextInput}
                placeholder='Email del Proveedor'
                label='Email:'
                validate={email}
              />
            </div>
            <div className=''>
              <Field
                name='phone'
                component={TextInput}
                placeholder='Telefono del Proveedor'
                label='Telefono:'
                validate={required}
              />
            </div>
            <div className=''>
              <Button
                disabled={submitting || pristine}
                primary
                btnLabel='Submit'
                type='submit'
              />
              <Button
                disabled={submitting || pristine}
                btnLabel='Reset'
                onClick={form.reset}
                type='button'
              />
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default NewSupplierForm;
