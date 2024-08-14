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

function App() {
  const[todos, dispatch] = useReducer(tasksReducer, []); // useReducer hook to manage the state

  return (
    <div className="todo-app">
      <div className="todo-app_Container">
        <div className="todo-app_Wrapper">
          <AddTodo
            dispatch={dispatch}
            todoLength={todos.length}
          />
          <TodoList 
            todos={todos}
            dispatch={dispatch}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
