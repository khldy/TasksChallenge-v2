const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo) 
}

module.exports.saveToDo = async (req, res) => {

    const {text} = req.body 

    ToDoModel
        .create({text})
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data)
        })
}

module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.set(201).send("Update Sueccesfully..."))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Sueccesfully..."))
    .catch((err) => console.log(err))
}

module.exports.completeToDo = async (req, res) => {
    const {_id, completed} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {completed})
    .then(() => res.set(201).send("Marked as completed sueccesfully..."))
    .catch((err) => console.log(err))
}

module.exports.getTasksByDay = async (req, res) => {
    const { day } = req.params;
    ToDoModel.find({ day: day })
        .then((tasks) => res.status(200).json(tasks))
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error fetching tasks");
        });
};
