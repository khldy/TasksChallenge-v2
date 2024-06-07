const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo, completeToDo, getTasksByDay } = require("../controllers/ToDoController");

const router = Router()

router.get('/', getToDo)
router.post('/save/:day', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)
router.post('/complete', completeToDo)
router.get('/challenge/:day', getToDo)

module.exports = router;