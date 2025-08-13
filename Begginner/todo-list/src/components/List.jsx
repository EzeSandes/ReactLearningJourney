import React from 'react';
import ListItem from './ListItem';

function List({ tasks, onDeleteItem, onEditItem, onCompleteTask }) {
  return (
    <div className='list_container'>
      <ul className='list'>
        {tasks.map(task => (
          <ListItem
            key={task.date}
            task={task}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem}
            onCompleteTask={onCompleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
