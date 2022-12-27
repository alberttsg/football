import Router from 'express';
import usersRouter from './users/users.router.js'
import charactersRouter from './characters/characters.router.js'

const router = Router();

router.use('/users', usersRouter );
router.use('/characters', charactersRouter );


export default router