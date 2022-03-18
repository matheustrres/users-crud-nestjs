import { Prisma } from '@prisma/client'

export class UserEntity implements Prisma.UserUncheckedCreateInput {
  name: string;
  email: string;
  password: string;
  posts?: Prisma.PostUncheckedCreateNestedManyWithoutAuthorInput;
}
