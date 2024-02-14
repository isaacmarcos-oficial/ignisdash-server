import "reflect-metadata";
import path from "path";
require("dotenv").config({ path: ".env.local" });
import "./src/mongodb/connect";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { migrateAddStatus } from "./scripts/migrate-add-status.js";

import { PostResolver } from "./src/Resolvers/PostResolver";
import { CourseResolver } from "./src/Resolvers/CourseResolver";
import { LessonResolver } from "./src/Resolvers/LessonResolver";
import { ModuleResolver } from "./src/Resolvers/ModuleResolver";
import { UserResolver } from "./src/Resolvers/UserResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [PostResolver, UserResolver, CourseResolver, ModuleResolver, LessonResolver],
    emitSchemaFile: path.resolve(__dirname, "scheme.ggl"),
  });

  const server = new ApolloServer({
    schema,
  });

  // Script para Migração
  // await migrateAddStatus()

  const { url } = await server.listen();
  console.log("Server running on " + url);
}

main();
