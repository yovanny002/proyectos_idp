import express, { Express, Request, Response } from "express";

// Security
import cors from "cors";
import helmet from "helmet";

// TODO: https

// Router
import rootRoutes from "../routes";

const server:Express = express();


server.use("/api", rootRoutes);

// Stactic server
server.use(express.static('public'));

// TODO: Mongosse Conection

// Cors
server.use(helmet());
server.use(cors());

// Content type
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({limit: '50mb'}));

//  Redirection
server.get('/', (req:Request, res: Response) => {
    res.redirect('/api')
});

// Exports
export default server;