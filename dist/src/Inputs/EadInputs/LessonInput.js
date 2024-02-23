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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditModuleInput = exports.CreateModuleInput = exports.EditLessonInput = exports.CreateLessonInput = void 0;
const type_graphql_1 = require("type-graphql");
let CreateLessonInput = class CreateLessonInput {
};
exports.CreateLessonInput = CreateLessonInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateLessonInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateLessonInput.prototype, "slug", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateLessonInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateLessonInput.prototype, "coverImage", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateLessonInput.prototype, "videoUrl", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateLessonInput.prototype, "moduleId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateLessonInput.prototype, "courseId", void 0);
exports.CreateLessonInput = CreateLessonInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateLessonInput);
let EditLessonInput = class EditLessonInput {
};
exports.EditLessonInput = EditLessonInput;
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.ID),
    __metadata("design:type", String)
], EditLessonInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditLessonInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditLessonInput.prototype, "slug", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditLessonInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditLessonInput.prototype, "coverImage", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditLessonInput.prototype, "videoUrl", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditLessonInput.prototype, "moduleId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditLessonInput.prototype, "courseId", void 0);
exports.EditLessonInput = EditLessonInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditLessonInput);
let CreateModuleInput = class CreateModuleInput {
};
exports.CreateModuleInput = CreateModuleInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateModuleInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateModuleInput.prototype, "description", void 0);
exports.CreateModuleInput = CreateModuleInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateModuleInput);
let EditModuleInput = class EditModuleInput {
};
exports.EditModuleInput = EditModuleInput;
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.ID),
    __metadata("design:type", String)
], EditModuleInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditModuleInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditModuleInput.prototype, "description", void 0);
exports.EditModuleInput = EditModuleInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditModuleInput);
