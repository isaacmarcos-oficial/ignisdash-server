import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  accessLevel: String,
})

export const UserMongo = mongoose.model("User", schema)