import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class LessonClass {
  @Field((type) => ID)
  id: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  videoUrl: string;

  @Field({ nullable: true })
  lessonType: string;

  @Field({ nullable: true })
  availableAt: string;

  @Field({ nullable: true })
  teacherName: string;

  @Field({ nullable: true })
  teacherAvatar: string;

  @Field({ nullable: true })
  teacherBio: string;
}
