import React from 'react';
import TodoItem from './TodoItem';
import "./todoList.scss";

function TodoList({ todos, toggleCompleted, deleteTodo, onTodoChange }) {
    return (
        <div className="todoList_Container">
            <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleCompleted={toggleCompleted} // Added this line to pass toggleCompleted function to TodoItem component, 
                    deleteTodo={deleteTodo} // Added this line to pass deleteTodo function to TodoItem component,
                    onTodoChange={onTodoChange} // Added this line to pass editTodo function to TodoItem component,
                />
            ))}
            </ul>
        </div>
    )
}

export default TodoList;