import express from "express";
import './databaseMongo.js'
import { middleware } from './middleware/middleware.js'
import apiRouter from './apiRouter.js'
import cors from 'cors'

const server = express()
const port = 3000;

server.use(express.json());
server.use(cors({ origin:true }))
server.use(middleware);
server.use(apiRouter)


server.listen(port, () => {
        console.log(`Server started on port ${port}`);
      });