import { Arg, Query, Mutation, Resolver } from "type-graphql";
import { CreateUserInput, EditUserInput } from "../Inputs/UsersInput";
import { User } from "../Models/User";
import { UserMongo } from "../mongodb/Models/User";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async allUsers() {
    return await UserMongo.find();
  }

  @Query(() => User)
  async user(@Arg("id") id: string) {
    return await UserMongo.findOne({ _id: id });
  }

  @Query(() => [User], { nullable: true })
  async usersByName(@Arg("name") name: string) {
    return await UserMongo.find({ name: { $regex: name, $options: "i" } });
  }

  @Mutation(() => User)
  async createUser(@Arg("createUserObject") createUserObject: CreateUserInput) {
    const { name, username, email, accessLevel, password } = createUserObject;

    return await UserMongo.create({
      name,
      username,
      email,
      accessLevel,
      password,
    });
  }

  @Mutation(() => User)
  async editUser(@Arg("editUserObject") editUserObject: EditUserInput) {
    const user = { ...editUserObject };
    await UserMongo.updateOne({ _id: user.id }, user);

    return user;
  }

  @Mutation(() => String)
  async deleteUser(@Arg("id") id: string) {
    await UserMongo.deleteOne({ _id: id });
    return id;
  }
}
