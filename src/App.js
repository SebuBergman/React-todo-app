import React, { useState } from'react';
import './App.css';
import './app.scss';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  /*handleChange = (e) => {
    this.setState({
      todo: e.target.value
    });
  }*/

  function submitTodo(title) {
    const newTodo = {
      id: uuid(),
			title: title,
			completed: false,
    }
    setTodos([...todos, newTodo]);
  }

  function toggleCompleted(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id? {...todo, completed:!todo.completed } : todo
    );
    setTodos(updatedTodos);
  }

    return (
      <div className="todo-app">
        <div className="todo-app_Container">
          <div className="todo-app_Wrapper">
            <AddTodo submitTodo={submitTodo}/>
            <TodoList 
              todos={todos}
              toggleCompleted={toggleCompleted}
              //onDelete={deleteTodo}
            />
          </div>
        </div>
      </div>
    );
}

export default App;
