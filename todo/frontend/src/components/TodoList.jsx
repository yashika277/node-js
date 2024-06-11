import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getTodoList, deleteTodoData, viewTodoData } from '../redux-thunk/actions/todoActions'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import { deleteTodoData, getTodoList, viewTodoData } from '../redux-thunk/action/todoAction';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function TodoList() {
    const dispatch = useDispatch()
    const todoState = useSelector((state) => state.todo)
    const todoList = todoState.todoList


    function deleteData(id) {
        dispatch(deleteTodoData(id))
    }

    function viewData(id) {
        console.log("viewData", id)
        dispatch(viewTodoData(id))
    }

    useEffect(() => {
        dispatch(getTodoList())
    }, [dispatch])

    return (
        <>
            <div className="row">
                {
                    todoList.map((todo, ind) => {
                        return (
                            <>
                                <div className="col-3"></div>
                                <div className="col-7" key={ind} >
                                    <div class="card" style={{ width: "36rem", marginLeft: "34px", marginTop: "30px", backgroundColor: "#33393d", color: "white" }}>

                                        <div class="card-body" key={ind} style={{ padding: "6px" }}>

                                            <div className="row">
                                                <div className="col-1">
                                                    <Checkbox {...label} />
                                                </div>
                                                <div className="col-9">
                                                    <h5 class="card-title" style={{ display: "inline-block", marginTop: "7px" }}>{todo.task}</h5>

                                                </div>
                                                <div className="col-2" style={{ marginTop: "6px" }}>
                                                    <DeleteForeverIcon style={{ marginLeft: "2px" }} onClick={() => {
                                                        deleteData(todo._id)
                                                    }} />
                                                    < EditIcon style={{ marginLeft: "14px" }} onClick={() => {
                                                        viewData(todo._id)
                                                    }} />
                                                </div>
                                            </div>

                                            {/* <button onClick={() => {
                                                deleteData(todo._id)
                                            }}>Delete</button> */}
                                            {/* <button onClick={() => {
                                                viewData(todo._id)
                                            }}>Edit</button> */}

                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div >
        </>
    )
}

