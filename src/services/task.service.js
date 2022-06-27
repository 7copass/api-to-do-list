const ToDoList = [
  {
    id: 1,
    nome: 'Estudar React',
    prioridade: 'Média',
  },
  {
    id: 2,
    nome: 'Fazer Projetos Blue',
    prioridade: 'Alta',
  },
  {
    id: 3,
    nome: 'Terminar módulos Bootcamp DIO ',
    prioridade: 'Baixa',
  },
  {
    id: 4,
    nome: 'Fazer Projetos pessoais',
    prioridade: 'Média',
  },
];

const FindAllTaskService = () => {
  return ToDoList;
};

const FindByIdTaskService = (id) => {
  return ToDoList.find((task) => task.id == id);
};

const createTaskService = (newTask) => {
  const newId = ToDoList.length + 1;
  newTask.id = newId;
  ToDoList.push(newTask);
  return newTask;
};

const updateTaskService = (id, taskedited) => {
  taskedited['id'] = id;
  const taskIndex = ToDoList.findIndex((task) => task.id == id);
  ToDoList[taskIndex] = taskedited;
  return taskedited;
};

const deleteTaskService = (id) => {
  const taskIndex = ToDoList.find((task) => task.id == id);
  return ToDoList.splice(taskIndex, 1);
};

module.exports = {
  FindAllTaskService,
  FindByIdTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
