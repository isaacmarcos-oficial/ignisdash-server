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
exports.PostResolver = void 0;
const type_graphql_1 = require("type-graphql");
const PostInput_1 = require("../Inputs/PostInput");
const Post_1 = require("../Models/Post");
const Post_2 = require("../mongodb/Models/Post");
let PostResolver = class PostResolver {
    async allPosts(name, status) {
        const query = {};
        if (name) {
            query.name = { ...query, name: new RegExp(name, "i") };
        }
        if (status) {
            query.status = { ...query, status };
        }
        return await Post_2.PostMongo.find();
    }
    async post(id) {
        return await Post_2.PostMongo.findOne({ _id: id });
    }
    async createPost(createPostObject) {
        const { title, author, tags, coverImage, content, note, status, dateCreate } = createPostObject;
        return await Post_2.PostMongo.create({
            title, author, tags, coverImage, content, note, status, dateCreate
        });
    }
    async editPost(editPostObject) {
        const post = { ...editPostObject };
        await Post_2.PostMongo.updateOne({ _id: post.id }, post);
        return post;
    }
    async deletePost(id) {
        await Post_2.PostMongo.deleteOne({ _id: id });
        return id;
    }
};
exports.PostResolver = PostResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Post_1.Post]),
    __param(0, (0, type_graphql_1.Arg)("name", { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)("status", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "allPosts", null);
__decorate([
    (0, type_graphql_1.Query)(() => Post_1.Post),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "post", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Post_1.Post),
    __param(0, (0, type_graphql_1.Arg)("createPostObject")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PostInput_1.CreatePostInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Post_1.Post),
    __param(0, (0, type_graphql_1.Arg)("editPostObject")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PostInput_1.EditPostInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "editPost", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "deletePost", null);
exports.PostResolver = PostResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], PostResolver);
