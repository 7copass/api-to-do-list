const route = require('express').Router();
const taskController = require('../controllers/task.controller');

route.get('/alltasks', taskController.FindAllTaskController);
route.get('/task/:id', taskController.FindByIdTaskController);
route.post('/create', taskController.createTaskController);
route.put('/update/:id', taskController.updateTaskController);
route.delete('/delete/:id', taskController.deleteTaskController);

module.exports = route;
