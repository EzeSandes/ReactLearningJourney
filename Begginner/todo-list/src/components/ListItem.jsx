function ListItem({ task, onDeleteItem, onEditItem, onCompleteTask }) {
  return (
    <li
      className={`list__item ${task.completed ? 'list__item--completed' : ''}`}
    >
      <input
        type='checkbox'
        name='todo-done'
        className='list__item__checkbox'
        checked={task.completed}
        onChange={() => onCompleteTask(task.id)}
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
        <button
          className='list__item__button list__item__edit'
          onClick={() => onEditItem(task)}
        >
          Edit
        </button>
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
