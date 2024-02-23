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
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const UsersInput_1 = require("../Inputs/UsersInput");
const User_1 = require("../Models/User");
const User_2 = require("../mongodb/Models/User");
let UserResolver = class UserResolver {
    async allUsers() {
        return await User_2.UserMongo.find();
    }
    async user(id) {
        return await User_2.UserMongo.findOne({ _id: id });
    }
    async usersByName(name) {
        return await User_2.UserMongo.find({ name: { $regex: name, $options: "i" } });
    }
    async createUser(createUserObject) {
        const { name, username, email, accessLevel, password } = createUserObject;
        return await User_2.UserMongo.create({
            name,
            username,
            email,
            accessLevel,
            password,
        });
    }
    async editUser(editUserObject) {
        const user = { ...editUserObject };
        await User_2.UserMongo.updateOne({ _id: user.id }, user);
        return user;
    }
    async deleteUser(id) {
        await User_2.UserMongo.deleteOne({ _id: id });
        return id;
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "allUsers", null);
__decorate([
    (0, type_graphql_1.Query)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "usersByName", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("createUserObject")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsersInput_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("editUserObject")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsersInput_1.EditUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "editUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
