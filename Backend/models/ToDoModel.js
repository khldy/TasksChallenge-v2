const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    day: {
        type: String,
    },

    text: {
        type: String,
        require: true
    }, 

    completed: {
        type: Boolean,
        default: false
    }

})

const ToDoModel = mongoose.model('ToDo', todoSchema);

module.exports = ToDoModel;