import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateCourseInput {
  @Field()
  title: string;
  
  @Field()
  slug: string;

  @Field()
  description: string;
  
  @Field()
  coverImage: string;
}

@InputType()
export class EditCourseInput {
  @Field((type) => ID)
  id: string;

  @Field({nullable: true})
  title: string;
  
  @Field({nullable: true})
  slug: string;

  @Field({nullable: true})
  description: string;
  
  @Field({nullable: true})
  coverImage: string;
}