"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    department: { type: String, required: true },
});
const EmployeeModel = (0, mongoose_1.model)('Employee', employeeSchema);
exports.default = EmployeeModel;
