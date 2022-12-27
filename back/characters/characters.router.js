import Router from 'express';
import { registerCharacters } from './characters.controller.js';

const router = Router();


router.post('/register', registerCharacters);

export default router