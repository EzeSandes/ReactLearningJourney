import React from 'react';

function Stats({ tasks }) {
  const numOfPendingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className='stats'>
      <p>
        Pending {numOfPendingTasks} / {tasks.length}
      </p>
    </div>
  );
}

export default Stats;
