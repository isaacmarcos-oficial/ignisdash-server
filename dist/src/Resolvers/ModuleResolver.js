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
exports.ModuleResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Course_1 = require("../mongodb/Models/Ead/Course");
const Lesson_1 = require("../Models/Ead/Lesson");
const LessonInput_1 = require("../Inputs/EadInputs/LessonInput");
let ModuleResolver = class ModuleResolver {
    async allModules() {
        return await Course_1.ModuleMongo.find();
    }
    async module(id) {
        return await Course_1.ModuleMongo.findOne({ _id: id });
    }
    async lessons(module) {
        const modules = await Course_1.ModuleMongo.find({ courseId: module.id });
        const lessons = await Promise.all(modules.map(async (module) => {
            return await Course_1.LessonMongo.find({ moduleId: module.id });
        }));
        return lessons.flat();
    }
    async allLessons() {
        return await Course_1.LessonMongo.find();
    }
    async createModule(createModuleObject) {
        const { title, description } = createModuleObject;
        return await Course_1.ModuleMongo.create({
            title, description
        });
    }
    async editModule(editModuleObject) {
        const module = { ...editModuleObject };
        await Course_1.ModuleMongo.updateOne({ _id: module.id }, module);
        return module;
    }
    async deleteModule(id) {
        await Course_1.ModuleMongo.deleteOne({ _id: id });
        return id;
    }
};
exports.ModuleResolver = ModuleResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Lesson_1.Module]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModuleResolver.prototype, "allModules", null);
__decorate([
    (0, type_graphql_1.Query)(() => Lesson_1.Module),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleResolver.prototype, "module", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => [Lesson_1.Lesson]),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Lesson_1.Module]),
    __metadata("design:returntype", Promise)
], ModuleResolver.prototype, "lessons", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Lesson_1.Lesson]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModuleResolver.prototype, "allLessons", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Lesson_1.Module),
    __param(0, (0, type_graphql_1.Arg)("createModuleObject")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LessonInput_1.CreateModuleInput]),
    __metadata("design:returntype", Promise)
], ModuleResolver.prototype, "createModule", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Lesson_1.Module),
    __param(0, (0, type_graphql_1.Arg)("editModuleObject")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LessonInput_1.EditModuleInput]),
    __metadata("design:returntype", Promise)
], ModuleResolver.prototype, "editModule", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleResolver.prototype, "deleteModule", null);
exports.ModuleResolver = ModuleResolver = __decorate([
    (0, type_graphql_1.Resolver)(of => Lesson_1.Module)
], ModuleResolver);
