const { TodoService} = require("../service")

    const addTodo = async (req, res) =>{        
           
     let result = await TodoService.addTodo(req.body)
     return res.send(result)
        
    }

    const getTodo = async (req, res) => {
        let result = await TodoService.getTodo()
        return res.send(result)
    }

    const deleteTodo = async (req, res) =>{
        let result = await TodoService.deleteTodo(req.params.id)
        return res.send(result)
    }

    const TodoView = async (req, res) =>{
        let result = await TodoService.viewTodo(req.params.id)
        return res.send(result)
    }

    const UpdateTodo = async (req, res) =>{
        let result = await TodoService.updateTodo(req)
        return res.send(result)
    }


    module.exports = {addTodo, getTodo, deleteTodo, UpdateTodo, TodoView}