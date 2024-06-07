import './App.css';
import { useState } from 'react';
import Task from './Components/Task';
import TaskForm from './Components/TaskForm';

function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <main>
      <TaskForm></TaskForm>
      <Task></Task>
    </main>
  )
}

export default App;
