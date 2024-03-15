import {
  Arg,
  Query,
  Mutation,
  Resolver,
  FieldResolver,
  Root,
} from "type-graphql";
import {
  CourseMongo,
  LessonMongo,
  ModuleMongo,
} from "../mongodb/Models/Ead/Course";
import { Lesson, Module } from "../Models/Ead/Lesson";
import {
  CreateModuleInput,
  EditModuleInput,
} from "../Inputs/EadInputs/LessonInput";
import { Course } from "../Models/Ead/Course";

@Resolver((of) => Module)
export class ModuleResolver {
  @Query(() => [Module])
  async allModules() {
    return await ModuleMongo.find().populate("lessons");
  }

  @Query(() => Module)
  async module(@Arg("id") id: string) {
    return await ModuleMongo.findOne({ _id: id }).populate("lessons");
  }

  @FieldResolver(() => [Lesson])
  async lessons(@Root() module: Module) {
    return await LessonMongo.find({ moduleId: module.id });
  }

  @FieldResolver(() => Course)
  async course(@Root() module: Module) {
    return await CourseMongo.findById(module.courseId);
  }

  @Query(() => [Lesson])
  async allLessons() {
    return await LessonMongo.find();
  }

  @Mutation(() => Module)
  async createModule(
    @Arg("createModuleObject") createModuleObject: CreateModuleInput
  ) {
    const { title, description, courseId } = createModuleObject;

    const module = await ModuleMongo.create({
      title,
      description,
      courseId,
    });

    const course = await CourseMongo.findById(courseId);
    return { ...module.toObject(), course };
  }

  @Mutation(() => Module)
  async editModule(@Arg("editModuleObject") editModuleObject: EditModuleInput) {
    const module = { ...editModuleObject };
    await ModuleMongo.updateOne({ _id: module.id }, module);

    return module;
  }

  @Mutation(() => String)
  async deleteModule(@Arg("id") id: string) {
    await ModuleMongo.deleteOne({ _id: id });
    return id;
  }
}
