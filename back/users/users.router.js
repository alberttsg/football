import Router from 'express';
import { registerUser, getAllEmails, login  } from './users.controller.js';

const router = Router();


router.post('/register', registerUser);
router.get('/getAllEmails', getAllEmails)
router.post('/login', login)

export default router