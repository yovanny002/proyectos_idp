/**
 * Root Router
 * Rediretions to Returns
 */

import express, { Request, Response } from 'express';
import homeRouter from './Homerouter';

// Server
const server = express();
// Router
const rootRouter = express.Router();


// Request
rootRouter.get('/', (req:Request, res:Response) => {
    res.send('Bienvenidos a esta prueba ')
})

// Redirection
server.use('/', rootRouter);
server.use('/home', homeRouter);
// Add more routes
export default server;