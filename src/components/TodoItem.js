import React, { Component } from 'react';
import "./todoItem.scss";
import { FaPen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";

function TodoItem({ todo, toggleCompleted }) {
    return (
        <li className="todoItem_Container">
            <h6 className={`${todo.completed ? 'completed-task' : ''}`}>{todo.title}</h6>
                <div className="todo-icon">
                    <span 
                        onClick={() => toggleCompleted(todo.id)}
                    >
                        {todo.completed ? <FaRegSquareCheck /> : <FaRegSquare />}
                    </span>
                    <span 
                        className="mx-2 text-warning"
                        //onClick={handleEdit}
                    >
                        <FaPen />
                    </span>
                    <span 
                        className="mx-2 text-danger"
                        //onClick={handleDelete}
                    >
                        <FaRegTrashAlt />
                    </span>
                </div>
        </li>
    )
}

export default TodoItem;