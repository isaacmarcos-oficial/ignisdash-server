"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleMongo = exports.LessonMongo = exports.CourseMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const lessonShema = new mongoose_1.default.Schema({
    title: String,
    slug: String,
    description: String,
    coverImage: String,
    videoUrl: String,
    moduleId: mongoose_1.default.Schema.Types.ObjectId,
    courseId: { type: mongoose_1.default.Schema.Types.ObjectId }
});
const moduleShema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    lessons: [lessonShema]
});
const courseSchema = new mongoose_1.default.Schema({
    title: String,
    slug: String,
    description: String,
    coverImage: String,
    module: [moduleShema],
    lessonShema: [lessonShema]
});
exports.CourseMongo = mongoose_1.default.model("Course", courseSchema);
exports.LessonMongo = mongoose_1.default.model("Lesson", lessonShema);
exports.ModuleMongo = mongoose_1.default.model("Module", moduleShema);