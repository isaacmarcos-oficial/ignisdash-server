import { Arg, Query, Mutation, Resolver } from "type-graphql";
import { ChatMessage } from "../Models/Ead/ChatMessage";
import { ChatMessageMongo } from "../mongodb/Models/Ead/ChatMessage";
import { CreateChatMessageInput, EditChatMessageInput } from "../Inputs/EadInputs/ChatMessage";

@Resolver()
export class ChatMessageResolver {
  @Query(() => [ChatMessage])
  async allMessages() {
    return await ChatMessageMongo.find();
  }

  @Query(() => ChatMessage)
  async chatMessage(@Arg("id") id: string) {
    return await ChatMessageMongo.findOne({ _id: id });
  }

  @Query(() => [ChatMessage], { nullable: true })
  async chatMessageFilter(
    @Arg("sender", { nullable: true }) sender: string,
    @Arg("message", { nullable: true }) message: string
  ) {
    const query: any = {};

    if (sender) {
      query.sender = { $regex: sender, $options: "i" };
    }

    if (message) {
      query.message = { $regex: message, $options: "i" };
    }

    return await ChatMessageMongo.find(query);
  }

  @Mutation(() => ChatMessage)
  async createChatMessage(
    @Arg("createChatMessageObject")
    createChatMessageObject: CreateChatMessageInput
  ) {
    const { sender, message, timestamp } = createChatMessageObject;

    return await ChatMessageMongo.create({
      sender,
      message,
      timestamp,
    });
  }

  @Mutation(() => ChatMessage)
  async editChatMessage(@Arg("editChatMessageObject") editChatMessageObject: EditChatMessageInput) {
    const chatMessage = { ...editChatMessageObject };
    await ChatMessageMongo.updateOne({ _id: chatMessage.id }, chatMessage);

    return chatMessage;
  }

  @Mutation(() => String)
  async deleteAllChatMessages() {
    await ChatMessageMongo.deleteMany({});
    return "All messages deleted";
  }

  @Mutation(() => String)
  async deleteChatMessage(@Arg("id") id: string) {
    await ChatMessageMongo.deleteOne({ _id: id });
    return id;
  }
}
