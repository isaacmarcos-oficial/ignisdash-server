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
import { TeacherResolver } from "./Resolvers/TeacherResolver";
import { LessonClassResolver } from "./Resolvers/LessonClassResolver";
import { ChatMessageResolver } from "./Resolvers/ChatMessageResolver";
import { createServer } from "http";
import { Server } from "socket.io";
import { ChatMessageMongo } from "./mongodb/Models/Ead/ChatMessage";

async function main() {
  const schema = await buildSchema({
    resolvers: [
      PostResolver,
      UserResolver,
      CourseResolver,
      ModuleResolver,
      LessonResolver,
      TeacherResolver,
      LessonClassResolver,
      ChatMessageResolver
    ],
    emitSchemaFile: path.resolve("/tmp", "scheme.ggl"),
  });

  const server = new ApolloServer({
    schema,
    introspection: true,

    cors: {
      origin: "*",
      credentials: true,
    },
  });

  const httpServer = createServer()
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true
    }
  })

  io.on("connection", (socket) => {  
    socket.on("sendMessage", async (messageData) => {
      try {

        const savedMessage = await ChatMessageMongo.create({
          sender: messageData.sender,
          message: messageData.message,
          timestamp: messageData.timestamp,
        });
        io.emit("receiveMessage", savedMessage);
      } catch (error) {
        console.error("Erro ao salvar a mensagem:", error);
      }
    });
  
    socket.on("disconnect", () => {
      console.log("Usuário desconectado");
    });
  });

  const { url } = await server.listen();
  console.log("Server running on " + url);

  httpServer.listen(4001, () => {
  console.log("Socket.IO server running on port 4001");
});
}

main();
