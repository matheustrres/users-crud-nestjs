import { Module } from '@nestjs/common';

import { CreateUserController } from './useCases/createUser/create-user.controller';
import { DeleteUserController } from './useCases/deleteUser/delete-user.controller';
import { ListUsersController } from './useCases/listUsers/list-users.controller';
import { UpdateUserController } from './useCases/updateUser/update-user.controller';

import { PrismaService } from '../prisma/prisma.service';

import { CreateUserService } from './useCases/createUser/create-user.service';
import { DeleteUserService } from './useCases/deleteUser/delete-user.service';
import { ListUsersService } from './useCases/listUsers/list-users.service';
import { UpdateUserService } from './useCases/updateUser/update-user.service';

import { UsersRepository } from './infra/repositories/users.repository';

@Module({
  controllers: [
    CreateUserController,
    DeleteUserController,
    ListUsersController,
    UpdateUserController,
  ],
  providers: [
    PrismaService,
    CreateUserService,
    DeleteUserService,
    ListUsersService,
    UpdateUserService,

    UsersRepository
  ]
})

export class UsersModule { }
