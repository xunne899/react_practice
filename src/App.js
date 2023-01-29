import React, { useState } from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
// import TodoRowItem from './components/TodoRowItem';
import TodoTable from './components/TodoTable';
function App() {

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Freed Puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make Supper', rowAssigned: 'User Three' },
    { rowNumber: 4, rowDescription: 'Watch Night Movie', rowAssigned: 'User Four' }
  ])

  const addTodo = (description,assigned) => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);
      
    }
  }
  return (
    //do not add () at onclick if not it will kick off the function once rendered
    <div className="App">
      <h1>We made our first application</h1>
      <p>This is our main welcome page</p>

      <div className="mt-5 container">
        <div className="card">
          <div className="card-header">
            List of To Do
          </div>
          <div className="card-body">
            <TodoTable todos={todos} />
            <button className='btn btn-primary' onClick={addTodo}>Add NewToDo</button>
          <NewTodoForm addTodo={addTodo}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

