"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 5001;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/rbr-db';
mongoose_1.default.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});
app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
});
