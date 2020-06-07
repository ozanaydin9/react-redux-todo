import React, {useState} from "react";
import './todo.css'
import {useDispatch} from "react-redux";
import {todosAdd} from "../../Redux/Actions/Actions";

const Todo = () => {

    const dispatch = useDispatch();
    const [text, setText] = useState([]);

    function addTodo() {
        dispatch(todosAdd(text))
    }

    return(
        <div className="todo-box">
            <div className="todo-area">
                <textarea className="textarea" onChange={(e) => setText(e.target.value)}></textarea>
            </div>
            <div className="button-area">
                <button className="add-button" onClick={addTodo}><span className="add-button-text">ADD</span></button>
            </div>
        </div>
    )
};

export default Todo;