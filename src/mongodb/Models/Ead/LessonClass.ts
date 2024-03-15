import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  description: String,
  lessonType: String,
  availableAt: String,
  teacherName: String,
  teacherAvatar: String,
  teacherBio: String
})

export const LessonClassMongo = mongoose.model("LessonClass", schema)