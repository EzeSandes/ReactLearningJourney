import React, { useState } from 'react';

function Form({ onAddItem }) {
  const [task, setTask] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (task === '') return;

    const newItem = {
      id: Date.now(), // For tests only
      text: task,
      date: Date.now(),
      completed: false,
    };

    console.log(newItem);
    onAddItem(newItem);
    setTask('');
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        className='form__input__text'
        type='text'
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder='Write a task'
      />
      <button type='submit' className='form__button'>
        Add
      </button>
    </form>
  );
}

export default Form;
