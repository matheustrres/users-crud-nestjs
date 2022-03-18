import { hash } from 'bcrypt';

import { BadRequestException, Injectable } from '@nestjs/common';

import { User } from '@prisma/client';

import { CreateUserDto } from '../../dtos/create-user.dto';

import { UsersRepository } from '../../infra/repositories/users.repository';

@Injectable()
export class CreateUserService {
  constructor(private readonly _repository: UsersRepository) { }

  async perform({ name, email, password, posts }: CreateUserDto): Promise<User> {
    const userData: User = await this._repository.findByEmail(email)

    if (userData) throw new BadRequestException('User already exists!')

    const hashedPassword = await hash(password, 9)

    const newUserData: User = await this._repository
      .create({
        name,
        email,
        password: hashedPassword,
        posts
      })

    return newUserData
  }
}