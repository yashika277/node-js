const {TodoListSchema} = require("../models")

const addTodo = (body) =>{
    return TodoListSchema.create(body)
}

const getTodo = () => {
    return TodoListSchema.find()
}

const deleteTodo = (id) =>{
    return TodoListSchema.findOneAndDelete({
        _id : id
    })
}

const viewTodo = (id) =>{
    return TodoListSchema.findOne({
        _id : id
    })
}

const updateTodo = (req) =>{
    return TodoListSchema.findOneAndUpdate({
        _id: req.params.id
    },
        req.body,
        {new : true}
    )
}

module.exports = {addTodo, getTodo, deleteTodo, updateTodo, viewTodo}