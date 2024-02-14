import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Lesson {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string

  @Field()
  slug: string;

  @Field()
  description: string;
  
  @Field()
  coverImage: string;

  @Field()
  videoUrl: string;

  @Field()
  moduleId: string;

  @Field()
  courseId: string
}

@ObjectType()
export class Module {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({nullable: true})
  description: string;
}

