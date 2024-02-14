import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateCategoryInput {
  @Field()
  name: string;

  @Field()
  slug: string;
  
  @Field()
  imageUrl: string;

  @Field(() => String, { defaultValue: "user" })
  accessLevel: string;
}

@InputType()
export class EditCategoryInput {
  @Field((type) => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  imageUrl?: string;
}