import { logInfo } from "../utils/logger";
import { HomeController } from "../controllers/HomeController";
import express, { Request, Response} from "express";


// Routers
let appRouter = express.Router();

// acceso a la ruta principal
appRouter.route('/')
    .get( async (req: Request, res: Response) => {
    //    Obtain a Query Param
    let name: any = req?.query?.name;
    logInfo(`Query Param : ${name}`);
    // Instace contoller to excute method
    const controller: HomeController = new HomeController();
    // Obtaine Response
    const response = await controller.getMessage(name);
    // Send to the client the reponse
    return res.send(response)
    })    
