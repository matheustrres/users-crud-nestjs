import { Injectable } from '@nestjs/common';

import { User } from '@prisma/client';

import { CreateUserDto } from '../../dtos/create-user.dto';
import { UpdateUserDto } from '../../dtos/update-user.dto';

import { PrismaService } from 'src/modules/prisma/prisma.service';

import { IUsersRepository } from '../../repositories/users.interface';

@Injectable()
export class UsersRepository implements IUsersRepository {
  private readonly _include = {
    posts: {
      select: {
        authorId: true,
        title: true,
        content: true
      }
    }
  }

  constructor(private readonly _prisma: PrismaService) { }

  async create(data: CreateUserDto): Promise<User> {
    const userData: User = await this._prisma.user
      .create({
        data,
        include:
          this._include
      })

    return userData
  }

  async delete(id: string): Promise<User> {
    const userData: User = await this._prisma.user
      .delete({
        where: {
          id
        },
        include: this._include
      })

    return userData
  }

  async findAll(): Promise<User[]> {
    const usersData: User[] = await this._prisma.user.findMany({
      include:
        this._include
    })

    return usersData
  }

  async findByEmail(email: string): Promise<User> {
    const userData: User = await this._prisma.user
      .findUnique({
        where: {
          email
        },
        include: this._include
      })

    return userData
  }

  async findById(id: string): Promise<User> {
    const userData: User = await this._prisma.user
      .findUnique({
        where: {
          id
        },
        include: this._include
      })

    return userData
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const userData: User = await this._prisma.user
      .update({
        where: {
          id
        },
        data,
        include: this._include
      })

    return userData
  }
}