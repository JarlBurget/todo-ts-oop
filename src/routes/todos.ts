import { Router } from "express";
import { todocontroller } from "../controllers/todos"

const router = Router()

router.post('/', todocontroller.createTodo)
router.get('/', todocontroller.getTodos)
router.patch('/:id', todocontroller.updateTodo)
router.delete('/:id', todocontroller.deleteTodo)

export default router