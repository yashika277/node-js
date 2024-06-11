import axios from "axios"
import { DELETE_PRODUCT, EMPTY_ID, GET_PRODUCTS, POST_PRODUCT, SEARCH_TODOS, UPDATE_PRODUCT, VIEW_PRODUCT } from "../type"

export const getTodoList = () => {
    return (dispatch) => {
        axios.get("http://localhost:6060/v1/todo/getList")
            .then((res) => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: res.data

                })
            })
    }
}

export const addTodoData = (todoData) => {
    return (dispatch) => {
        axios.post("http://localhost:6060/v1/todo/add", todoData)
            .then((res) => {
                dispatch({
                    type: POST_PRODUCT,
                    payload: res.data

                })
            })
    }
}

export const deleteTodoData = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:6060/v1/todo/deleteList/${id}`)
            .then((res) => {
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: id

                })
            })
    }
}

export const viewTodoData = (id) => {
    return {
        type: VIEW_PRODUCT,
        payload: id
    }
}

export const updateTodoData = (todoData) => {
    return (dispatch) => {
        axios.put(`http://localhost:6060/v1/todo/updateList/${todoData._id}`, todoData)
            .then((res) => {
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: res.data

                })
            })
    }
}


// export const emptyViewId = () => {
//     return (dispatch) => {
//         dispatch({
//             type: EMPTY_ID,
//             payload: ""
//         })
//     }
// }
// export const searchTodos = (todo) => {

//     console.log(todo, "action");
//     return (dispatch) => {
//         axios.get(`http://localhost:6000/v1/todo/getList/search?keyword=${todo}`)
//             .then((res) => {
//                 console.log(res.data, "redsas");
//                 dispatch({
//                     type: SEARCH_TODOS,
//                     payload: res.data

//                 })
//             })
//     }
// }