"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./src/routes"));
const logger_1 = require("./src/utils/logger");
// configurarion
dotenv_1.default.config();
// port
const port = process.env.PORT || 8000;
routes_1.default.listen(port, () => {
    (0, logger_1.LogSuccess)('Acceso exitoso');
});
routes_1.default.on('error', (error) => {
    (0, logger_1.LogError)(`Error: ${error}`);
});
//# sourceMappingURL=index.js.map