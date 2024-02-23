"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    title: String,
    author: String,
    tags: String,
    coverImage: String,
    content: String,
    note: String,
    status: String,
    dateCreate: { type: String }
});
exports.PostMongo = mongoose_1.default.model("Post", schema);
