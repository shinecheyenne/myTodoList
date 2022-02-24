const express = require('express');
const TodoRouter = express.Router();
const Todo = require('../../models/Todo');

// TodoRouter.get('/', (req, res)=>{
//     res.json("hello world");
// })

TodoRouter.get('/', async(req, res)=>{
    const todos = await Todo.find();
    res.json(todos);
})

TodoRouter.post('/', async (req, res)=>{
    const newTodo = new Todo(req.body)
    await newTodo
        .save()
        .then(()=>{
            res.json({status: 201, msg:"yeah!", newTodo});
        })
})




module.exports = TodoRouter;