const mongoose = require('mongoose');

const validId = (req, res, next) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      return res.status(400).send({ message: 'Id inválido' });
    }
    next();
  };

  const validObjectBody = (req, res, next) => {
    const task = req.body;
  
    if (
      !task ||
      !task.nome ||
      !task.prioridade 
      
    ) {
      return res.status(400).send({ message: 'Envie Todos os campos da task' });
    }
    next();
  };

  module.exports = {
    validId,
    validObjectBody,
  };
  