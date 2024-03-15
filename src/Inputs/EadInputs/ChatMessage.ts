import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateChatMessageInput {
  @Field()
  sender: string;
  
  @Field()
  message: string;

  @Field()
  timestamp: string;
}

@InputType()
export class EditChatMessageInput {
  @Field((type) => ID)
  id: string;

  @Field()
  sender: string;
  
  @Field()
  message: string;

  @Field()
  timestamp: string;
}