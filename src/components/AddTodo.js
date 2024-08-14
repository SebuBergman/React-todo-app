import React, { useState } from 'react';
import "./todoItem.scss";
import { FaBook } from "react-icons/fa";

function AddTodo({ submitTodo, todoLength, clearTodos }) {
    const [todo, setTodo] = useState('');

    let addTodoContent;

    if (todoLength === 0) {
        addTodoContent = (
            <>
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
                <div className="input_buttonContainer">
                    <button
                        className="add_button"
                        onClick={() => {
                            setTodo("");
                            submitTodo(todo);
                        }}
                    >
                        Add task
                    </button>
                </div>
            </>
        )
    } else {
        addTodoContent = (
            <>
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
                <div className="input_buttonContainer">
                    <button
                        className="add_button_1"
                        onClick={() => {
                            setTodo("");
                            submitTodo(todo);
                        }}
                    >
                        Add task
                    </button>
                    <button
                        className="add_button_2"
                        onClick={clearTodos}
                    >
                        Clear todos
                    </button>
                </div>
            </>
        )
    }

    return (
        <div className="addTodo_Container">
            {addTodoContent}
        </div>
    )
}

export default AddTodo;