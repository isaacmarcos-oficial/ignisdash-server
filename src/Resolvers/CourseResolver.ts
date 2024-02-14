import { Arg, Query, Mutation, Resolver, FieldResolver, Root } from "type-graphql";
import { CourseMongo, LessonMongo, ModuleMongo } from "../mongodb/Models/Ead/Course";
import { CreateCourseInput, EditCourseInput } from "../Inputs/EadInputs/CourseInput";
import { Course } from "../Models/Ead/Course";
import { Lesson, Module } from "../Models/Ead/Lesson";

@Resolver(of => Course)
export class CourseResolver {
  @Query(() => [Course])
  async allCourses() {
    return await CourseMongo.find();
  }

  @Query(() => Course)
  async course(@Arg("id") id: string) {
    return await CourseMongo.findOne({ _id: id });
  }

  @FieldResolver(() => [Module])
  async modules(@Root() course: Course) {
    return await ModuleMongo.find({ courseId: course.id })
  }

  @FieldResolver(() => [Lesson])
  async lessons(@Root() course: Course) {
    const modules = await ModuleMongo.find({ courseId: course.id });
    const lessons = await Promise.all(modules.map(async (module) => {
      return await LessonMongo.find({ moduleId: module.id });
    }));
    return lessons.flat();
  }

  @Mutation(() => Course)
  async createCourse(
    @Arg("createCourseObject") createCourseObject: CreateCourseInput
  ) {
    const { title, description, slug, coverImage } =
      createCourseObject;

    return await CourseMongo.create({
      title, description, slug, coverImage
    });
  }

  @Mutation(() => Course)
  async editCourse(@Arg("editCourseObject") editCourseObject: EditCourseInput) {
    const course = { ...editCourseObject };
    await CourseMongo.updateOne({ _id: course.id }, course);

    return course;
  }

  @Mutation(() => String)
  async deleteCourse(@Arg("id") id: string) {
    await CourseMongo.deleteOne({ _id: id });
    return id;
  }
}
