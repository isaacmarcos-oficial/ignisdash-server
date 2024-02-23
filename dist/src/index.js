"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const path_1 = __importDefault(require("path"));
require("dotenv").config({ path: ".env.local" });
require("./mongodb/connect");
const type_graphql_1 = require("type-graphql");
const apollo_server_1 = require("apollo-server");
const PostResolver_1 = require("./Resolvers/PostResolver");
const CourseResolver_1 = require("./Resolvers/CourseResolver");
const LessonResolver_1 = require("./Resolvers/LessonResolver");
const ModuleResolver_1 = require("./Resolvers/ModuleResolver");
const UserResolver_1 = require("./Resolvers/UserResolver");
async function main() {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [PostResolver_1.PostResolver, UserResolver_1.UserResolver, CourseResolver_1.CourseResolver, ModuleResolver_1.ModuleResolver, LessonResolver_1.LessonResolver],
        emitSchemaFile: path_1.default.resolve(__dirname, "scheme.ggl"),
    });
    const server = new apollo_server_1.ApolloServer({
        schema,
        introspection: true,
        cors: {
            origin: "*",
            credentials: true
        }
    });
    const { url } = await server.listen();
    console.log("Server running on " + url);
}
main();
