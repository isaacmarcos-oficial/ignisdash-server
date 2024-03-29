import { Arg, Query, Mutation, Resolver } from "type-graphql";
import { CreatePostInput, EditPostInput } from "../Inputs/PostInput";
import { Post } from "../Models/Post";
import { PostMongo } from "../mongodb/Models/Post";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  async allPosts() {
    return await PostMongo.find();
  }
  
  @Query(() => [Post])
  async postsFiltered(
    @Arg("title", { nullable: true }) title: string,
    @Arg("status", { nullable: true }) status: string
  ) {
    const query: any = {};

    if (title) {
      query.title = new RegExp(title, "i");
    }

    if (status) {
      query.status = (status);
    }

    return await PostMongo.find(query);
  }

  @Query(() => Post)
  async post(@Arg("id") id: string) {
    return await PostMongo.findOne({ _id: id });
  }

  @Mutation(() => Post)
  async createPost(
    @Arg("createPostObject") createPostObject: CreatePostInput
  ) {
    const { title, author, tags, coverImage, content, note, status, dateCreate } =
      createPostObject;

    return await PostMongo.create({
      title, author, tags, coverImage, content, note, status, dateCreate
    });
  }

  @Mutation(() => Post)
  async editPost(@Arg("editPostObject") editPostObject: EditPostInput) {
    const post = { ...editPostObject };
    await PostMongo.updateOne({ _id: post.id }, post);

    return post;
  }

  @Mutation(() => String)
  async deletePost(@Arg("id") id: string) {
    await PostMongo.deleteOne({ _id: id });
    return id;
  }
}
