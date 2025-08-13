import { useEffect, useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import List from './components/List';
import Modal from './components/Modal';

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
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');

    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  function handleAddItem({ text }) {
    const newItem = {
      id: Date.now(), // For tests only
      text,
      date: Date.now(),
      completed: false,
    };

    setTasks(prevs => [...prevs, newItem]);
  }

  function handleDeleteItem(id) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    setIsModalOpen(false);
  }

  function handleOpenEditModal(task) {
    setEditingTask(task);
    setIsModalOpen(true);
  }

  function handleEditItem(id, { text }) {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, text } : task
    );
    setTasks(newTasks);
    setIsModalOpen(false);
  }

  function handleCompleteTask(id) {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setEditingTask(null);
  }

  useEffect(
    function () {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    },
    [tasks]
  );

  useEffect(
    function () {
      function callback(e) {
        if (e.key === 'Escape') {
          setEditingTask(null);
          setIsModalOpen(false);
        }
      }

      document.addEventListener('keydown', callback);

      return () => document.removeEventListener('keydown', callback);
    },
    [setIsModalOpen]
  );

  return (
    <div className='app'>
      <header>
        <Logo />
      </header>

      <main className='main'>
        <Form onSubmit={handleAddItem} />
        <List
          tasks={tasks}
          onDeleteItem={handleDeleteItem}
          onEditItem={handleOpenEditModal}
          onCompleteTask={handleCompleteTask}
        />
        {isModalOpen && (
          <Modal onCloseModal={handleCloseModal}>
            <Form
              onSubmit={values => handleEditItem(editingTask.id, values)}
              onCancel={handleCloseModal}
              isEditing
            />
          </Modal>
        )}
      </main>
    </div>
  );
}

export default App;
