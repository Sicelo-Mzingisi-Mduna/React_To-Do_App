import {useState} from 'react';
function TaskForm(){

  const [taskName, setTaskName] = useState('');

  return (
    <>
      <form>
        <button>+</button>
        <input 
          type = "text" 
          value = {taskName} 
          onChange = {(e) => setTaskName(e.target.value)} 
          placeholder='Your next task...'
        ></input>
      </form>
    </>
  )
}

export default TaskForm