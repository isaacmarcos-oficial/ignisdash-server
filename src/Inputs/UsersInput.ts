import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateUserInput {
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

@InputType()
export class EditUserInput {
  @Field((type) => ID)
  id: string;

  @Field({nullable: true})
  name: string;

  @Field({nullable: true})
  username: string;
  
  @Field({nullable: true})
  email: string;
  
  @Field({nullable: true})
  password: string;

  @Field(() => String, { nullable:true, defaultValue: "user" })
  accessLevel: string;
}