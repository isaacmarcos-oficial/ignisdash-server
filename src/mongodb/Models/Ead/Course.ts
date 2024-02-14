import mongoose from "mongoose";

const lessonShema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  coverImage: String,
  videoUrl: String,
  moduleId: mongoose.Schema.Types.ObjectId,
  courseId: { type: mongoose.Schema.Types.ObjectId }
})

const moduleShema = new mongoose.Schema({
  title: String,
  description: String,
  lessons: [lessonShema]
})

const courseSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  coverImage: String,
  module: [moduleShema],
  lessonShema: [lessonShema]
})

export const CourseMongo = mongoose.model("Course", courseSchema)
export const LessonMongo = mongoose.model("Lesson", lessonShema)
export const ModuleMongo = mongoose.model("Mudule", moduleShema)