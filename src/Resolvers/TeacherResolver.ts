import { Arg, Query, Mutation, Resolver } from "type-graphql";
import { CreateTeacherInput, EditTeacherInput } from "../Inputs/EadInputs/Teacher";
import { Teacher } from "../Models/Ead/Teacher";
import { TeacherMongo } from "../mongodb/Models/Ead/Course";
import { Module } from "../Models/Ead/Lesson";

@Resolver(of => Module)
export class TeacherResolver {
  @Query(() => [Teacher])
  async allTeacher() {
    return await TeacherMongo.find();
  }
  
  @Query(() => [Teacher])
  async teacherFiltered(
    @Arg("name", { nullable: true }) name: string,
  ) {
    const query: any = {};

    if (name) {
      query.name = new RegExp(name, "i");
    }

    return await TeacherMongo.find(query);
  }

  @Query(() => Teacher)
  async teacher(@Arg("id") id: string) {
    return await TeacherMongo.findOne({ _id: id });
  }

  @Mutation(() => Teacher)
  async createTeacher(
    @Arg("createTeacherObject") createTeacherObject: CreateTeacherInput
  ) {
    const { name, bio, avatarUrl } =
      createTeacherObject;

    return await TeacherMongo.create({
      name, bio, avatarUrl
    });
  }

  @Mutation(() => Teacher)
  async editTeacher(@Arg("editTeacherObject") editTeacherObject: EditTeacherInput) {
    const teacher = { ...editTeacherObject };
    await TeacherMongo.updateOne({ _id: teacher.id }, teacher);

    return teacher;
  }

  @Mutation(() => String)
  async deleteTeacher(@Arg("id") id: string) {
    await TeacherMongo.deleteOne({ _id: id });
    return id;
  }
}
