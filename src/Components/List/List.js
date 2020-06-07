import React, {useEffect} from "react";
import './list.css'
import {useDispatch, useSelector} from "react-redux";
import {selectTodos} from "../../Redux/Accessors/Accessors";
import {getTodos} from "../../Redux/Actions/Actions";
import TodoList from "./TodoList";

const List = () => {

    const dispatch = useDispatch();
    const todos = useSelector(selectTodos)

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    return (
        <div className="list-box">
            <div className="list-area">
                {todos.map((t) => (
                    <TodoList key={t._id} {...t} />
                ))}
            </div>
        </div>

    )
};

export default List;