import { Arg, Query, Mutation, Resolver, FieldResolver, Root } from "type-graphql";
import { LessonMongo, ModuleMongo } from "../mongodb/Models/Ead/Course";
import { Lesson, Module } from "../Models/Ead/Lesson";
import { CreateModuleInput, EditModuleInput } from "../Inputs/EadInputs/LessonInput";

@Resolver(of => Module)
export class ModuleResolver {
  @Query(() => [Module])
  async allModules() {
    return await ModuleMongo.find();
  }

  @Query(() => Module)
  async module(@Arg("id") id: string) {
    return await ModuleMongo.findOne({ _id: id });
  }

  @FieldResolver(() => [Lesson])
  async lessons(@Root() module: Module) {
    const modules = await ModuleMongo.find({ courseId: module.id });
    const lessons = await Promise.all(modules.map(async (module) => {
      return await LessonMongo.find({ moduleId: module.id });
    }));
    return lessons.flat();
  }

  @Query(() => [Lesson])
  async allLessons() {
    return await LessonMongo.find();
  }

  @Mutation(() => Module)
  async createModule(
    @Arg("createModuleObject") createModuleObject: CreateModuleInput
  ) {
    const { title, description } =
      createModuleObject;

    return await ModuleMongo.create({
      title, description
    });
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
