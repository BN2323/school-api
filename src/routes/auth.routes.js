import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import {register, login, getUsers} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', authMiddleware, getUsers);

export default router;
