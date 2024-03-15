import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateTeacherInput {
  @Field()
  name: string;
  
  @Field({nullable: true})
  bio: string;

  @Field({nullable: true})
  avatarUrl: string;
}

@InputType()
export class EditTeacherInput {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;
  
  @Field({nullable: true})
  bio: string;

  @Field({nullable: true})
  avatarUrl: string;
}