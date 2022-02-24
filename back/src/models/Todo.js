const mongoose = require('mongoose');

const TodoScheme = mongoose.Schema({
    title: {type: String, required: true, trim: true},
    done: {type: String, default: 'doing'},
    description: {type: String, required: true, trim: true},
    created: {type: Date, default: Date.now}
})

const Todo = mongoose.model('Todo', TodoScheme);

module.exports = Todo;