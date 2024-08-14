import React, { useState, useReducer } from'react';
import './App.css';
import './app.scss';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
       ...tasks,
      {
        id: uuid(),
        title: action.title,
        completed: false,
      }
      ];
    case 'TOGGLE_COMPLETED':
      return tasks.map((todo) =>
        todo.id === action.id? {...todo, completed:!todo.completed } : todo
      );
    case 'DELETE_TODO':
      return tasks.filter((todo) => todo.id!== action.id);
    case 'EDIT_TODO':
      return tasks.map((todo) => {
        if (todo.id === action.editedTodo.id) {
          return action.editedTodo;
        } else {
          return todo;
        }
      }
      );
    case 'CLEAR_TODOS':
      return [];
    default:
      return tasks;
  }
}

/*
todos.map((todo) => {
        if (todo.id === editedTodo.id) {
          return editedTodo;
        } else {
          return todo;
        }
      })
*/
function App() {
  const[todos, dispatch] = useReducer(tasksReducer, []); // useReducer hook to manage the state

  function submitTodo(title) { // Function add a new todo to the list
    dispatch({
      type: "ADD_TODO",
      title,
    });
  }

  function toggleCompleted(id) { 
    dispatch({
      type: "TOGGLE_COMPLETED",
      id,
    });
  }

  function editTodo(editedTodo) { // Function to edit a todo using its id
    dispatch({
      type: "EDIT_TODO",
      editedTodo,
    });
  }
  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      id,
    }) // Function to delete a todo using its id
  }

  function clearTodos() {
    dispatch({
      type: "CLEAR_TODOS",
    });
  }

  return (
    <div className="todo-app">
      <div className="todo-app_Container">
        <div className="todo-app_Wrapper">
          <AddTodo
            submitTodo={submitTodo}
            todoLength={todos.length}
            clearTodos={clearTodos}
          />
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
