import Router from 'express';
import { registerCharacters, getCharacters } from './characters.controller.js';

const router = Router();


router.post('/register', registerCharacters);
router.get('/getCharacters', getCharacters);

export default router