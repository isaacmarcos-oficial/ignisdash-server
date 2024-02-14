import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Post {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;
  
  @Field()
  author: string;
  
  @Field()
  tags: string;
  
  @Field()
  coverImage: string;

  @Field()
  content: string;

  @Field()
  note: string;

  @Field()
  status: string;

  @Field()
  dateCreate: string;
}
