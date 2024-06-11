import { DELETE_PRODUCT, SEARCH_TODOS, EMPTY_ID, GET_PRODUCTS, POST_PRODUCT, UPDATE_PRODUCT, VIEW_PRODUCT } from "../type";

const initialState = {
    todoList: [],
    viewId: null

}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                todoList: action.payload
            }
        case POST_PRODUCT:
            let newTodoList = [...state.todoList, action.payload]
            return {
                ...state,
                todoList: newTodoList
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                todoList: state.todoList.filter((p) => p._id !== action.payload)
            }
        case VIEW_PRODUCT:
            return {
                ...state,
                viewId: action.payload

            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                todoList: state.todoList.map((p) => {
                    if (p._id === action.payload._id) {
                        return action.payload
                    } else {
                        return p
                    }
                })
            }
        case EMPTY_ID:
            return {
                ...state,
                viewId: null

            }
        case SEARCH_TODOS:
            console.log(action.payload);
            return {
                ...state,
                todoList: action.payload

            }

        default:
            return state
    }
}