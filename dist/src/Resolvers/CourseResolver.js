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
exports.CourseResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Course_1 = require("../mongodb/Models/Ead/Course");
const CourseInput_1 = require("../Inputs/EadInputs/CourseInput");
const Course_2 = require("../Models/Ead/Course");
const Lesson_1 = require("../Models/Ead/Lesson");
let CourseResolver = class CourseResolver {
    async allCourses() {
        return await Course_1.CourseMongo.find();
    }
    async course(id) {
        return await Course_1.CourseMongo.findOne({ _id: id });
    }
    async modules(course) {
        return await Course_1.ModuleMongo.find({ courseId: course.id });
    }
    async lessons(course) {
        const modules = await Course_1.ModuleMongo.find({ courseId: course.id });
        const lessons = await Promise.all(modules.map(async (module) => {
            return await Course_1.LessonMongo.find({ moduleId: module.id });
        }));
        return lessons.flat();
    }
    async createCourse(createCourseObject) {
        const { title, description, slug, coverImage } = createCourseObject;
        return await Course_1.CourseMongo.create({
            title, description, slug, coverImage
        });
    }
    async editCourse(editCourseObject) {
        const course = { ...editCourseObject };
        await Course_1.CourseMongo.updateOne({ _id: course.id }, course);
        return course;
    }
    async deleteCourse(id) {
        await Course_1.CourseMongo.deleteOne({ _id: id });
        return id;
    }
};
exports.CourseResolver = CourseResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Course_2.Course]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "allCourses", null);
__decorate([
    (0, type_graphql_1.Query)(() => Course_2.Course),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "course", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => [Lesson_1.Module]),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Course_2.Course]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "modules", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => [Lesson_1.Lesson]),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Course_2.Course]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "lessons", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Course_2.Course),
    __param(0, (0, type_graphql_1.Arg)("createCourseObject")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CourseInput_1.CreateCourseInput]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "createCourse", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Course_2.Course),
    __param(0, (0, type_graphql_1.Arg)("editCourseObject")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CourseInput_1.EditCourseInput]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "editCourse", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "deleteCourse", null);
exports.CourseResolver = CourseResolver = __decorate([
    (0, type_graphql_1.Resolver)(of => Course_2.Course)
], CourseResolver);
