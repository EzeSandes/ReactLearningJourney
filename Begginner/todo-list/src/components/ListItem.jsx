import { useState } from 'react';

function ListItem({ task, onDeleteItem }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <li className={`list__item ${isCompleted ? 'list__item--completed' : ''}`}>
      <input
        type='checkbox'
        name='todo-done'
        className='list__item__checkbox'
        value={isCompleted}
        onChange={() => setIsCompleted(prev => !prev)}
      />
      <div className='list__item__content'>
        <p className='list__item__text'>{task.text}</p>
        <span className='list__item__date'>
          {new Date(task.date).toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })}
          , {new Date(task.date).toLocaleDateString()}
        </span>
      </div>
      <div className='list__item__actions'>
        <button className='list__item__button list__item__edit'>Edit</button>
        <button
          className='list__item__button list__item__delete'
          onClick={() => onDeleteItem(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ListItem;
