import Router from 'express';
import { registerCharacters, getCharacters, getCharactersById, buyCharacter, sellCharacter } from './characters.controller.js';

const router = Router();


router.post('/register', registerCharacters);
router.get('/getCharacters', getCharacters);
router.get('/getCharactersById', getCharactersById);
router.put('/buyCharacter', buyCharacter);
router.put('/sellCharacter', sellCharacter);

export default router