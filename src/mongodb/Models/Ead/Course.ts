import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: String,
  bio: String,
  avatarUrl: String,
});

const lessonSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  coverImage: String,
  videoUrl: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
});

const moduleSchema = new mongoose.Schema({
  title: String,
  description: String,
  courseId: {type: mongoose.Schema.Types.ObjectId, ref: "Course"},
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
});

const courseSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  coverImage: String,
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Module" }],
});

moduleSchema.virtual('id').get(function() {return this._id.toHexString();});
moduleSchema.set('toObject', { virtuals: true });
moduleSchema.set('toJSON', { virtuals: true });

export const CourseMongo = mongoose.model("Course", courseSchema);
export const LessonMongo = mongoose.model("Lesson", lessonSchema);
export const ModuleMongo = mongoose.model("Module", moduleSchema);
export const TeacherMongo = mongoose.model("Teacher", teacherSchema);