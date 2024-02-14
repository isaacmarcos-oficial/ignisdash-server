import { Arg, Query, Mutation, Resolver } from "type-graphql";
import { LessonMongo } from "../mongodb/Models/Ead/Course";
import { CreateLessonInput, EditLessonInput } from "../Inputs/EadInputs/LessonInput";
import { Lesson } from "../Models/Ead/Lesson";

@Resolver()
export class LessonResolver {
  @Query(() => [Lesson])
  async allLessons() {
    return await LessonMongo.find();
  }

  @Query(() => Lesson)
  async lesson(@Arg("id") id: string) {
    return await LessonMongo.findOne({ _id: id });
  }

  @Mutation(() => Lesson)
  async createLesson(
    @Arg("createLessonObject") createLessonObject: CreateLessonInput
  ) {
    const { title, description, slug, coverImage, videoUrl, courseId, moduleId } =
      createLessonObject;

    return await LessonMongo.create({
      title, description, slug, coverImage, videoUrl, courseId, moduleId
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
