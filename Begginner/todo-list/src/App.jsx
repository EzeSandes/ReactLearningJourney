import { useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import List from './components/List';

const initialTasks = [
  {
    id: 1,
    text: 'Comprar cosas para la semana',
    date: '2025-08-09T10:00:00.000Z',
    completed: false,
  },
  {
    id: 2,
    text: 'Terminar el proyecto de React',
    date: '2025-08-10T14:30:00.000Z',
    completed: true,
  },
  {
    id: 3,
    text: 'Llamar al médico para cita',
    date: '2025-08-11T09:00:00.000Z',
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddItem(newTask) {
    setTasks(prevs => [...prevs, newTask]);
  }

  function handleDeleteItem(id) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  function handleEditItem(id) {}

  return (
    <div className='app'>
      <Logo />

      <main className='main'>
        <Form onAddItem={handleAddItem} />
        <List tasks={tasks} onDeleteItem={handleDeleteItem} />
      </main>
    </div>
  );
}

export default App;
