import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateLessonInput {
  @Field()
  title: string;
  
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

@InputType()
export class EditLessonInput {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;
  
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

@InputType()
export class CreateModuleInput {
  @Field()
  title: string;

  @Field({nullable: true})
  description: string;
}

@InputType()
export class EditModuleInput {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({nullable: true})
  description: string;
}