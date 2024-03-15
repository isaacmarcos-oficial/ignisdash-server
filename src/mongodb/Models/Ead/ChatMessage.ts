import mongoose from "mongoose";

const schema = new mongoose.Schema({
  sender: String,
  message: String,
  timestamp: String,
});

export const ChatMessageMongo = mongoose.model("ChatMessage", schema);
