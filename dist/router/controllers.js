"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = exports.updateData = exports.addData = exports.getDatabyID = exports.getData = void 0;
const Todos_json_1 = __importDefault(require("../Database/Todos.json"));
const getData = (request, response) => {
    try {
        const { completed } = request.query;
        if (completed === "true") {
            const filterData = Todos_json_1.default.filter(item => item.completed === true);
            response.status(200).json(filterData);
            return null;
        }
        else if (completed === "false") {
            const filterData = Todos_json_1.default.filter(item => item.completed === false);
            response.status(200).json(filterData);
            return null;
        }
        response.status(200).json(Todos_json_1.default);
    }
    catch (error) {
        response.status(404).json("Resource Does Not Found");
    }
};
exports.getData = getData;
const getDatabyID = (request, response) => {
    try {
        const { ID } = request.params;
        const singleData = Todos_json_1.default.find(item => item.id === Number(ID));
        if (!singleData) {
            throw new Error();
        }
        response.status(200).json(singleData);
    }
    catch (error) {
        response.status(404).json("Resource Dose Not Found");
    }
};
exports.getDatabyID = getDatabyID;
const addData = (request, response) => {
    try {
        const { title } = request.body;
        if (!title) {
            throw new Error();
        }
        const newData = {
            id: Todos_json_1.default.length + 1,
            title,
            completed: false
        };
        Todos_json_1.default.push(newData);
        response.status(200).json("New Data has been added");
    }
    catch (error) {
        response.status(400).json("Please provide the title");
    }
};
exports.addData = addData;
const updateData = (request, response) => {
    try {
        const { ID } = request.params;
        const getSingleData = Todos_json_1.default.find(item => item.id === Number(ID));
        if (!getSingleData) {
            throw new Error("Resource Does Not Found");
        }
        const { title, completed } = request.body;
        if (!title && completed === undefined) {
            throw new Error();
        }
        getSingleData.title = title || getSingleData.title;
        getSingleData.completed = completed !== undefined ? completed : getSingleData.completed;
        response.status(200).json("Data has been updated");
    }
    catch (error) {
        response.status(404).json("Please provide the title or completed");
    }
};
exports.updateData = updateData;
const deleteData = (request, response) => {
    try {
        const { ID } = request.params;
        const getSingleData = Todos_json_1.default.find(item => item.id === Number(ID));
        if (!getSingleData) {
            throw new Error();
        }
        Todos_json_1.default.splice(Todos_json_1.default.indexOf(getSingleData), 1);
        response.status(200).json("Data has been deleted");
    }
    catch (error) {
        response.status(400).json("Resource Does Not Found");
    }
};
exports.deleteData = deleteData;
