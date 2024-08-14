import React, { useState } from 'react';
import "./todoItem.scss";
import { FaPen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";

function TodoItem({ todo, toggleCompleted, deleteTodo, onTodoChange }) {
    const [isEditing, setIsEditing] = useState(false);

    let todoContent;
    console.log(todo);

    if (isEditing) {
        todoContent = (
            <>
                <input
                    type="text"
                    className="todo-editItem"
                    value={todo.title}
                    onChange={(e) => {
                        onTodoChange({
                            ...todo,
                            title: e.target.value,
                        });
                    }}
                />
                <button
                    className="todo-editButton"
                    onClick={() => setIsEditing(false)}
                >
                    Save
                </button>
            </>
        )
    } else {
        todoContent = (
            <>
                <h6 className={`${todo.completed ? 'completed-task' : ''}`}>{todo.title}</h6>
                <div className="todo-icon">
                    <span 
                        onClick={() => toggleCompleted(todo.id)} // Added this line to toggle completed status when checkbox is clicked
                    >
                        {todo.completed ? <FaRegSquareCheck /> : <FaRegSquare />}
                    </span>
                    <span 
                        className="mx-2 text-warning"
                        onClick={() => setIsEditing(true)}  // Added this line to open edit form when edit icon is clicked
                    >
                        <FaPen />
                    </span>
                    <span 
                        className="mx-2 text-danger"
                        onClick={() => deleteTodo(todo.id)} // Added this line to delete todo when trash icon is clicked
                    >
                        <FaRegTrashAlt />
                    </span>
                </div>
            </>
        )
    }

    return (
        <li className="todoItem_Container">
            {todoContent}
        </li>
    )
}

export default TodoItem;