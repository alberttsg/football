import Router from 'express';
import { registerCharacters, getCharacters, getCharactersById, buyCharacter, sellCharacter } from './characters.controller.js';
import multer from 'multer'
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = Router();

const diskStorage = multer.diskStorage({
    destination: (req, file, cb)=> {
        const filePath = path.resolve(__dirname ,'../public/data/uploads')
        cb(null, filePath)
    },
    filename:(req, file, cb)=>{
        const fileName = req.body.name.toLowerCase()
        const fileExtension = path.extname(file.originalname)

        cb(null, `${fileName}${fileExtension}`)
    }
})

const uploadFiles = multer({ storage:diskStorage })

router.post('/register', uploadFiles.single('img'), registerCharacters);
router.get('/getCharacters', getCharacters);
router.get('/getCharactersById', getCharactersById);
router.put('/buyCharacter', buyCharacter);
router.put('/sellCharacter', sellCharacter);

export default router