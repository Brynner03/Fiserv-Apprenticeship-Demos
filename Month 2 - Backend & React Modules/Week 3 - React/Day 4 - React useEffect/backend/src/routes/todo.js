const router = require("express").Router();
const Todo = require("../models/Todo.js");

router
  .post("/", async (req, res, next) => {
    try {
      const todo = await Todo.create(req.body);
      res.json(todo);
    } catch (error) {
      next(error);
    }
  })
  .get("/", async (req, res, next) => {
    try {
      const todos = await Todo.findAll({});
      res.json(todos);
    } catch (error) {
      next(error);
    }
  })
  .delete("/:id", async (req, res, next) => {
    try {
      const todo = await Todo.findByPk(req.params.id)
      await Todo.destroy(todo)
    } catch (error) {
      next(error)
    }
  })

module.exports = router;