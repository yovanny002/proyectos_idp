import { Get, Query, Route, Tags } from 'tsoa';
import { BasicResponse } from "./types";
import { IHomeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";


@Route("/api/home")
@Tags("HomeController")
export class HomeController implements IHomeController {
    /**
     * Endpoint to retrive a Message "Bienvenido {name} in Json"
     * @param {string | undefined} name Name of user to be greeted
     * @returns {BasicResponse} Promise of Basicresponse
     */

    @Get("/")
    public async getMessage(@Query()name?: string | undefined): Promise<BasicResponse> {
       LogSuccess('[/api/home] Get Request');

       return {
        message: `Bienvenido,  ${name || "Iglesia de Dios de la Profecía RD"}`
       }
    }
    
}