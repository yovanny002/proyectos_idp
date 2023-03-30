import dotenv from 'dotenv';
import server from './src/routes';
import { logError, logSuccess } from './src/utils/logger';

dotenv.config();

server.listen(8000, () => {
   logSuccess('')
});

server.on('error', (error) =>{
    logError(`Error: ${error}`)
})