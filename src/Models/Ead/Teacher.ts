import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Teacher {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;
  
  @Field({nullable: true})
  bio: string;

  @Field({nullable: true})
  avatarUrl: string;
}
