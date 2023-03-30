"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./src/routes"));
const logger_1 = require("./src/utils/logger");
dotenv_1.default.config();
routes_1.default.listen(8000, () => {
    (0, logger_1.logSuccess)('');
});
routes_1.default.on('error', (error) => {
    (0, logger_1.logError)(`Error: ${error}`);
});
//# sourceMappingURL=index.js.map