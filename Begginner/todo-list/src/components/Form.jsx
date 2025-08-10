import React, { useState } from 'react';

function Form({
  onSubmit,
  initialValues = { text: '' },
  isEditing = false,
  onCancel,
}) {
  const [values, setValues] = useState(initialValues);

  function handleSubmit(e) {
    e.preventDefault();

    if (values.text.trim() === '') return;

    onSubmit(values);
    setValues({ text: '' });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setValues(prev => ({ ...prev, [name]: value }));
  }

  function handleCancel() {
    setValues(initialValues);

    if (onCancel) onCancel(); // Close the modal in edit mode.
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        className='form__input__text'
        type='text'
        name='text'
        value={values.text}
        onChange={handleChange}
        placeholder={isEditing ? 'Edit task...' : 'Write a task'}
      />
      <button type='submit' className='form__button'>
        {isEditing ? 'Save' : 'Add'}
      </button>

      {isEditing && (
        <button type='button' className='form__button' onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default Form;
