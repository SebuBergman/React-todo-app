import React from 'react';
import TodoItem from './TodoItem';
import "./todoList.scss";

function TodoList({ todos, onTodoChange, dispatch }) {
    return (
        <div className="todoList_Container">
            <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    dispatch={dispatch} // Added this line to pass dispatch function to TodoItem component, 
                />
            ))}
            </ul>
        </div>
    )
}

export default TodoList;