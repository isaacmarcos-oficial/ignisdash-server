import "reflect-metadata";
import path from "path";
require("dotenv").config({ path: ".env" });
import "./mongodb/connect";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";

import { PostResolver } from "./Resolvers/PostResolver";
import { CourseResolver } from "./Resolvers/CourseResolver";
import { LessonResolver } from "./Resolvers/LessonResolver";
import { ModuleResolver } from "./Resolvers/ModuleResolver";
import { UserResolver } from "./Resolvers/UserResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [PostResolver, UserResolver, CourseResolver, ModuleResolver, LessonResolver],
    emitSchemaFile: path.resolve("/tmp", "scheme.ggl"),
  });

  const server = new ApolloServer({
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
