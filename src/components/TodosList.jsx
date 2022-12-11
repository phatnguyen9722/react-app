import React from "react";
import './TodosList.scss';

function TodosList({todos, setTodos}) {
    return (
        <div>
            {todos.map((todo)=> (
                <li className="todo-list" key={todo.id}>
                    <input 
                        type="text" 
                        value={todo.title}
                        className="list"
                        onChange={(event)=>event.preventDefault()}
                    />
                </li>
            ))}
        </div>
    );
};

export default TodosList;