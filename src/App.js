import React, { useState } from'react';
import './App.css';
import './app.scss';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]); // state for storing todos

  function submitTodo(title) { // Function add a new todo to the list
    const newTodo = {
      id: uuid(),
			title: title,
			completed: false,
    }
    setTodos([...todos, newTodo]);
  }

  function toggleCompleted(id) { // Function to toggle the completed status of a todo
    const updatedTodos = todos.map((todo) =>
      todo.id === id? {...todo, completed:!todo.completed } : todo
    );
    setTodos(updatedTodos);
  }

  function deleteTodo(id) { // Function to delete a todo using its id
    const updatedTodos = todos.filter((todo) => todo.id!== id);
    setTodos(updatedTodos);
  }

  function editTodo(editedTodo) { // Function to edit a todo using its id
    setTodos(
      todos.map((todo) => {
        if (todo.id === editedTodo.id) {
          return editedTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function clearTodos() {
    setTodos([]);
  }

  return (
    <div className="todo-app">
      <div className="todo-app_Container">
        <div className="todo-app_Wrapper">
          <AddTodo submitTodo={submitTodo} todoLength={todos.length} clearTodos={clearTodos}/>
          <TodoList 
            todos={todos}
            toggleCompleted={toggleCompleted} // Added this line to pass toggleCompleted function to TodoList component
            deleteTodo={deleteTodo} // Added this line to pass deleteTodo function to TodoList component
            onTodoChange={editTodo} // Added this line to pass editTodo function to TodoList component
          />
        </div>
      </div>
    </div>
  );
}

export default App;
