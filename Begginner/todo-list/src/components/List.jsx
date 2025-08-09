import React from 'react';
import ListItem from './ListItem';

function List({ tasks, onDeleteItem }) {
  return (
    <div className='list_container'>
      <ul className='list'>
        {tasks.map(task => (
          <ListItem key={task.date} task={task} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default List;
