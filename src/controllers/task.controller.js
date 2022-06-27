const taskService = require('../services/task.service');

const FindAllTaskController = (req, res) => {
  const ToDoList = taskService.FindAllTaskService();
  res.send(ToDoList);
};

const FindByIdTaskController = (req, res) => {
  const idParametro = req.params.id;
  const escolhaTask = taskService.FindByIdTaskService(idParametro);
  res.send(escolhaTask);
};

const createTaskController = (req, res) => {
  const Task = req.body;
  const newTask = taskService.createTaskService(Task);
  res.send(newTask);
};

const updateTaskController = (req, res) => {
  const idparam = +req.params.id;
  const taskedit = req.body;
  const updateTask = taskService.updateTaskService(idparam, taskedit);
  res.send(updateTask);
};

const deleteTaskController = (req, res) => {
  const idParam = req.params.id;
  taskService.deleteTaskService(idParam);
  res.send({ message: 'Task deleta com Sucesso' });
};

module.exports = {
  FindAllTaskController,
  FindByIdTaskController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
};
