import { Arg, Query, Mutation, Resolver } from "type-graphql";
import { LessonClass } from "../Models/Ead/LessonClass";
import { LessonClassMongo } from "../mongodb/Models/Ead/LessonClass";
import { CreateLessonClassInput, EditLessonClassInput } from "../Inputs/EadInputs/LessonClassInput";

@Resolver()
export class LessonClassResolver {
  @Query(() => [LessonClass])
  async allLessonsClass() {
    return await LessonClassMongo.find();
  }

  @Query(() => [LessonClass])
  async lessonsClassFiltered(@Arg("title", { nullable: true }) title: string) {
    const query: any = {};

    if (title) {
      query.title = new RegExp(title, "i");
    }

    return await LessonClassMongo.find(query);
  }

  @Query(() => LessonClass)
  async lessonClass(@Arg("id") id: string) {
    return await LessonClassMongo.findOne({ _id: id });
  }

  @Mutation(() => LessonClass)
  async createLessonClass(
    @Arg("createLessonClassObject")
    createLessonClassObject: CreateLessonClassInput
  ) {
    const {
      title,
      videoUrl,
      description,
      lessonType,
      availableAt,
      teacherName,
      teacherAvatar,
      teacherBio,
    } = createLessonClassObject;

    return await LessonClassMongo.create({
      title,
      videoUrl,
      description,
      lessonType,
      availableAt,
      teacherName,
      teacherAvatar,
      teacherBio,
    });
  }

  @Mutation(() => LessonClass)
  async editLessonClass(@Arg("editLessonClassObject") editLessonClassObject: EditLessonClassInput) {
    const lessonClass = { ...editLessonClassObject };
    await LessonClassMongo.updateOne({ _id: lessonClass.id }, lessonClass);

    return lessonClass;
  }

  @Mutation(() => String)
  async deleteLessonClass(@Arg("id") id: string) {
    await LessonClassMongo.deleteOne({ _id: id });
    return id;
  }
}
