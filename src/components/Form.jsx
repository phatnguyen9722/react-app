import React from "react";
import {v4 as uuidV4} from "uuid";
import './Form.scss'

function Form({input, setInput, todos, setTodos}) {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {id: uuidV4(), title: input, completed: false}]); 
        setInput ("");
    }
    return (
        <form onSubmit={onFormSubmit} className="form-todo">
            <input 
                type="text" 
                placeholder="Enter to do.." 
                className="task-input" 
                value={input}
                required
                onChange={onInputChange}
            />
            <button className="btn-add" type="submit">
                Add
            </button>
        </form>
    );

};

export default Form;