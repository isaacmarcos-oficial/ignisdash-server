import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreatePostInput {
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
  dateCreate: string;

  @Field({nullable: true})
  note: string;

  @Field(() => String, { defaultValue: "Rascunho" })
  status: string;
}

@InputType()
export class EditPostInput {
  @Field((type) => ID)
  id: string;

  @Field({nullable: true})
  title: string;
  
  @Field({nullable: true})
  author: string;
  
  @Field({nullable: true})
  tags: string;
  
  @Field({nullable: true})
  coverImage: string;

  @Field({nullable: true})
  content: string;

  @Field({nullable: true})
  note: string;

  @Field(() => String, { defaultValue: "Rascunho" })
  status: string;
}