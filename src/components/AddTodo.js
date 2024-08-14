import React, { useState } from 'react';
import "./todoItem.scss";
import { FaBook } from "react-icons/fa";

function AddTodo({ submitTodo, todoLength, clearTodos }) {
    const [todo, setTodo] = useState('');

    let addTodoContent;
    console.log(todoLength);

    if (todoLength === 0) {
        console.log("Is zero");
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
                <button
                    onClick={() => {
                        setTodo("");
                        submitTodo(todo);
                    }}
                >
                    Add task
                </button>
            </>
        )
    } else {
        console.log("Is more than zero");
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
                <button
                    onClick={() => {
                        setTodo("");
                        submitTodo(todo);
                    }}
                >
                    Add task
                </button>
                <button
                    onClick={clearTodos}
                >
                    Clear todos
                </button>
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