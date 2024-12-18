"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
router.post('/', todos_1.todocontroller.createTodo);
router.get('/', todos_1.todocontroller.getTodos);
router.patch('/:id', todos_1.todocontroller.updateTodo);
router.delete('/:id', todos_1.todocontroller.deleteTodo);
exports.default = router;
