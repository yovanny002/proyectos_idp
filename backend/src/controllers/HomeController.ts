import { BasicResponse } from "./types";
import { IHomeController } from "./interfaces";
import { logSuccess } from "../utils/logger";

export class HomeController implements IHomeController {
    public async getMessage(name?: string | undefined): Promise<BasicResponse> {
       logSuccess('[/api/home] Get Request');

       return {
        message: `Hello,  ${name || "World"}`
       }
    }
    
}