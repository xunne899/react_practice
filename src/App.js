import React, { useState } from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
// import TodoRowItem from './components/TodoRowItem';
import TodoTable from './components/TodoTable';
function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Freed Puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make Supper', rowAssigned: 'User Three' },
    { rowNumber: 4, rowDescription: 'Watch Night Movie', rowAssigned: 'User Four' }
  ])


  const addTodo = (description,assigned) => {
    let rowNumber = 0; 
    if (todos.length > 0) {
      rowNumber = todos[todos.length-1].rowNumber + 1;
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);
      
    }

  }

    const deleteTodo = (deleteTodoRowNumber) =>{
      let filtered = todos.filter(function (value){
        return value.rowNumber !== deleteTodoRowNumber
      });
      setTodos(filtered);
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
            <TodoTable todos={todos}  deleteTodo={deleteTodo}/>
            <button className='btn btn-primary' onClick={()=> setShowAddTodoForm(!showAddTodoForm)}>
               {showAddTodoForm ? 'Close New Todo':'New Todo'}
               </button>
               {
                showAddTodoForm &&
                <NewTodoForm addTodo={addTodo}/>
               }
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

