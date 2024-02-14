import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  author: String,
  tags: String,
  coverImage: String,
  content: String,
  note: String,
  status: String,
  dateCreate: { type: String}
})

export const PostMongo = mongoose.model("Post", schema)