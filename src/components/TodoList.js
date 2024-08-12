import React from 'react';
import TodoItem from './TodoItem';
import "./todoList.scss";

function TodoList({ todos, toggleCompleted }) {
    return (
        <div className="todoList_Container">
            <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleCompleted={toggleCompleted}
                    //deleteTodo={deleteTodo}
                />
            ))}
            </ul>
        </div>
    )
}

export default TodoList;