import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class ChatMessage {
  @Field((type) => ID)
  id: string;

  @Field()
  sender: string;
  
  @Field()
  message: string;

  @Field()
  timestamp: string;
}
