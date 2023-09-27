const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the todo.
 *         description:
 *           type: string
 *           description: The description of the todo.
 *         isDone:
 *           type: boolean
 *           description: Indicates whether the todo is done or not.
 */

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo.
 *     description: Create a new todo with the provided title and description.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: Todo created successfully.
 *       400:
 *         description: Invalid input data.
 */
router.post('/', todoController.createTodo);

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get a list of all todos.
 *     description: Retrieve a list of all todos.
 *     responses:
 *       200:
 *         description: A list of todos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
router.get('/', todoController.getAllTodos);

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Get a todo by ID.
 *     description: Retrieve a todo by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The todo object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo not found.
 */

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update a todo by ID.
 *     description: Update a todo by its ID with new data.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: Todo updated successfully.
 *       400:
 *         description: Invalid input data.
 *       404:
 *         description: Todo not found.
 */

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo by ID.
 *     description: Delete a todo by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo to delete.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Todo deleted successfully.
 *       404:
 *         description: Todo not found.
 */
router.route('/:id')
  .get(todoController.getTodo)
  .put(todoController.updateTodo)
  .delete(todoController.deleteTodo);

/**
 * @swagger
 * /todos/status/{done}:
 *   get:
 *     summary: Get todos by status.
 *     description: Retrieve todos by their "isDone" status.
 *     parameters:
 *       - in: path
 *         name: done
 *         required: true
 *         description: The status of todos to retrieve (true or false).
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of todos with the specified status.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
router.get('/status/:done', todoController.getTodosByStatus);

module.exports = router;