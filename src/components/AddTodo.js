import React, { useState } from 'react';
import "./todoItem.scss";
import { FaBook } from "react-icons/fa";

function AddTodo({ submitTodo }) {
    const [todo, setTodo] = useState('');

    return (
        <div className="addTodo_Container">
            <div className="input-group">
                <div className="input-icon">
                    <FaBook color="white" />
                </div>
                
                <input
                    className="input"
                    placeholder="Add a new task"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
            </div>
            <button
                onClick={() => {
                    setTodo("");
                    submitTodo(todo);
                }}
            >
                Add task
            </button>
        </div>
    )
}

export default AddTodo;