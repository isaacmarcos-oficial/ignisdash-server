import { Arg, Query, Mutation, Resolver, FieldResolver, Root } from "type-graphql";
import { LessonMongo, ModuleMongo, TeacherMongo } from "../mongodb/Models/Ead/Course";
import { CreateLessonInput, EditLessonInput } from "../Inputs/EadInputs/LessonInput";
import { Lesson, Module } from "../Models/Ead/Lesson";
import { Teacher } from "../Models/Ead/Teacher";

@Resolver(of => Lesson)
export class LessonResolver {
  @Query(() => [Lesson])
  async allLessons() {
    return await LessonMongo.find();
  }

  @Query(() => Lesson)
  async lesson(@Arg("id") id: string) {
    return await LessonMongo.findOne({ _id: id });
  }

  @FieldResolver(() => Teacher)
  async teacher(@Root() lesson: Lesson) {
    if(!lesson.teacherId) {
      return null
    }
    return await TeacherMongo.findOne({ _id: lesson.teacherId });
  }

  @FieldResolver(() => Module)
  async module(@Root() lesson: Lesson) {
    return await ModuleMongo.findOne({ _id: lesson.moduleId });
  }

  @Mutation(() => Lesson)
  async createLesson(
    @Arg("createLessonObject") createLessonObject: CreateLessonInput
  ) {
    const { title, description, slug, coverImage, videoUrl, courseId, moduleId, teacherId } =
      createLessonObject;

    return await LessonMongo.create({
      title, description, slug, coverImage, videoUrl, courseId, moduleId, teacherId
    });
  }

  @Mutation(() => Lesson)
  async editLesson(@Arg("editLessonObject") editLessonObject: EditLessonInput) {
    const lesson = { ...editLessonObject };
    await LessonMongo.updateOne({ _id: lesson.id }, lesson);

    return lesson;
  }

  @Mutation(() => String)
  async deleteLesson(@Arg("id") id: string) {
    await LessonMongo.deleteOne({ _id: id });
    return id;
  }
}
