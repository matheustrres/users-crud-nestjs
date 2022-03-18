import { Prisma } from '@prisma/client';

import { IsEmail, IsOptional, IsString } from 'class-validator';

import { UserEntity } from '../infra/prisma/entities/user.entity';

export class CreateUserDto extends UserEntity {
  @IsString()
  name: string;
   
  @IsEmail()
  @IsString()
  email: string;
  
  @IsString()
  password: string;

  @IsOptional()
  posts?: Prisma.PostUncheckedCreateNestedManyWithoutAuthorInput;
}
