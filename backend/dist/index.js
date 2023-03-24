"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// cofiguration
dotenv_1.default.config();
// create my server
const server = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Routers
server.get('/', (req, res) => {
    res.send('Bienvenidos a la Iglesia de Dios de la Profecía RD');
});
server.listen(port, () => {
    console.log(`Servidor corriendo en el puero http://localhost/${port}`);
});
//# sourceMappingURL=index.js.map