"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Course_1 = require("../mongodb/Models/Ead/Course");
const LessonInput_1 = require("../Inputs/EadInputs/LessonInput");
const Lesson_1 = require("../Models/Ead/Lesson");
let LessonResolver = class LessonResolver {
    async allLessons() {
        return await Course_1.LessonMongo.find();
    }
    async lesson(id) {
        return await Course_1.LessonMongo.findOne({ _id: id });
    }
    async createLesson(createLessonObject) {
        const { title, description, slug, coverImage, videoUrl, courseId, moduleId } = createLessonObject;
        return await Course_1.LessonMongo.create({
            title, description, slug, coverImage, videoUrl, courseId, moduleId
        });
    }
    async editLesson(editLessonObject) {
        const lesson = { ...editLessonObject };
        await Course_1.LessonMongo.updateOne({ _id: lesson.id }, lesson);
        return lesson;
    }
    async deleteLesson(id) {
        await Course_1.LessonMongo.deleteOne({ _id: id });
        return id;
    }
};
exports.LessonResolver = LessonResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Lesson_1.Lesson]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LessonResolver.prototype, "allLessons", null);
__decorate([
    (0, type_graphql_1.Query)(() => Lesson_1.Lesson),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LessonResolver.prototype, "lesson", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Lesson_1.Lesson),
    __param(0, (0, type_graphql_1.Arg)("createLessonObject")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LessonInput_1.CreateLessonInput]),
    __metadata("design:returntype", Promise)
], LessonResolver.prototype, "createLesson", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Lesson_1.Lesson),
    __param(0, (0, type_graphql_1.Arg)("editLessonObject")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LessonInput_1.EditLessonInput]),
    __metadata("design:returntype", Promise)
], LessonResolver.prototype, "editLesson", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LessonResolver.prototype, "deleteLesson", null);
exports.LessonResolver = LessonResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], LessonResolver);
