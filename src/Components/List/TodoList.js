import PropTypes from 'prop-types'
import React from 'react'
import { todoDelete, todoUpdate} from "../../Redux/Actions/Actions";
import {useDispatch} from "react-redux";

const TodoList = ({todo_name, todo_completed, _id}) =>{

    const dispatch = useDispatch();

    return(
        <>
            {(todo_completed) ? <textarea readOnly={true} onClick={() => dispatch(todoUpdate(_id,todo_completed))} className="list-text-done" defaultValue={todo_name}></textarea>
                              : <textarea readOnly={true} onClick={() => dispatch(todoUpdate(_id,todo_completed))} className="list-text" defaultValue={todo_name}></textarea>}

            <textarea readOnly={true} className="list-delete" onClick={() => dispatch(todoDelete(_id))} defaultValue={"x"}></textarea>
        </>
    )};

TodoList.propTypes = {
    todo_name: PropTypes.string.isRequired,
    todo_completed: PropTypes.bool.isRequired
};

export default TodoList;