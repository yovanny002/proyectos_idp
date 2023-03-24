import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

// cofiguration
dotenv.config();

// create my server
const server: Express = express();
const port : string | number = process.env.PORT || 8000;


// Routers
server.get('/', (req: Request, res: Response) => {
    res.send('Bienvenidos a la Iglesia de Dios de la Profecía RD');
});

server.listen(port, ()=>{
    console.log(`Servidor corriendo en el puero http://localhost/${port}`)
})