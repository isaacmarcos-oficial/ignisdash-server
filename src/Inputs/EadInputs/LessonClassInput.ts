import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateLessonClassInput {
  @Field()
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

@InputType()
export class EditLessonClassInput {
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
