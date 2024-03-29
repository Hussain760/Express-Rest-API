"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./router/route"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", route_1.default);
app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});
