import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  username: string;
  
  @Field()
  email: string;
  
  @Field()
  password: string;

  @Field(() => String, { defaultValue: "user" })
  accessLevel: string;
}
