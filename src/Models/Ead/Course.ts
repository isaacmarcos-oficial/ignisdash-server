import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Course {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;
  
  @Field({nullable: true})
  slug: string;

  @Field({nullable: true})
  description: string;
  
  @Field({nullable: true})
  coverImage: string;
}
