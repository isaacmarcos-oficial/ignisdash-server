import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateLessonInput {
  @Field()
  title: string;
  
  @Field()
  slug: string;

  @Field()
  description: string;
  
  @Field()
  coverImage: string;

  @Field()
  videoUrl: string;

  @Field({nullable: true})
  moduleId: string;

  @Field()
  courseId: string

  @Field()
  teacherId: string
}

@InputType()
export class EditLessonInput {
  @Field((type) => ID)
  id: string;

  @Field({nullable: true})
  title: string;
  
  @Field({nullable: true})
  slug: string;

  @Field({nullable: true})
  description: string;
  
  @Field({nullable: true})
  coverImage: string;

  @Field({nullable: true})
  videoUrl: string;

  @Field({nullable: true})
  moduleId: string;

  @Field({nullable: true})
  courseId: string

  @Field({nullable: true})
  teacherId: string
}

@InputType()
export class CreateModuleInput {
  @Field()
  title: string;

  @Field({nullable: true})
  description: string;

  @Field({nullable: true})
  courseId: string;
}

@InputType()
export class EditModuleInput {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({nullable: true})
  description: string;

  @Field({nullable: true})
  courseId: string;
}