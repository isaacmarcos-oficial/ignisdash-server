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
exports.EditPostInput = exports.CreatePostInput = void 0;
const type_graphql_1 = require("type-graphql");
let CreatePostInput = class CreatePostInput {
};
exports.CreatePostInput = CreatePostInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "author", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "tags", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "coverImage", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "content", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "dateCreate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreatePostInput.prototype, "note", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { defaultValue: "Rascunho" }),
    __metadata("design:type", String)
], CreatePostInput.prototype, "status", void 0);
exports.CreatePostInput = CreatePostInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreatePostInput);
let EditPostInput = class EditPostInput {
};
exports.EditPostInput = EditPostInput;
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.ID),
    __metadata("design:type", String)
], EditPostInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditPostInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditPostInput.prototype, "author", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditPostInput.prototype, "tags", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditPostInput.prototype, "coverImage", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditPostInput.prototype, "content", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditPostInput.prototype, "note", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { defaultValue: "Rascunho" }),
    __metadata("design:type", String)
], EditPostInput.prototype, "status", void 0);
exports.EditPostInput = EditPostInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditPostInput);
