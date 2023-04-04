import dotenv from 'dotenv';
import server from './src/routes';
import { LogError, LogSuccess } from './src/utils/logger';


// configurarion
dotenv.config();

// port
const port = process.env.PORT || 8000;

server.listen(port, () => {
   LogSuccess('Acceso exitoso')
});

server.on('error', (error) =>{
    LogError(`Error: ${error}`)
})