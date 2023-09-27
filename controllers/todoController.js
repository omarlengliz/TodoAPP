const Todo = require('../models/todoModel');

const createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if(!title || !description)
      {
        const err = new Error("title/description are required ");
        err.statusCode = 400;
        next(err);
      }
    const todo = await Todo.create({ title, description });
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

const getTodosByStatus = async (req, res, next) => {
  try {
    const status=req.params.done;
    if (status !=="done" && status!=="pending")
    {
      const err = new Error("Invalid Status");
      err.statusCode = 400;
      next(err);
    }
    const todos = await Todo.find({isDone: status==="done"? true : false  });
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};
const getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if(todo)
    res.status(200).json(todo);
    else
      {
        const err = new Error("Todo Not Found");
        err.statusCode = 404;
        next(err);
      }
  } catch (error) {
    next(error);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById( req.params.id, );
    if(todo)
    {
      todo.title = req.body.title || todo.title;
      todo.description = req.body.description || todo.description;
      todo.isDone = req.body.isDone || todo.isDone;
      const updatedTodo = await todo.save();
      res.status(200).json(updatedTodo);
    }
    else
      {
        const err = new Error("Todo Not Found");
        err.statusCode = 404;
        next(err);
      }
  } catch (error) {
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById( req.params.id, );
    if(todo)
    {
      await Todo.deleteOne({_id: req.params.id});
      res.status(200).json({message:"Todo deleted successfully "});
    }
    else
      {
        const err = new Error("Todo Not Found");
        err.statusCode = 404;
        next(err);
      }
  } catch (error) {
    next(error);
  }
};

module.exports={deleteTodo , getAllTodos , updateTodo,createTodo,getTodo,getTodosByStatus }