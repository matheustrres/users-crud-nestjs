import { Injectable } from '@nestjs/common';

import { User } from '@prisma/client';

import { UsersRepository } from '../../infra/repositories/users.repository';

@Injectable()
export class ListUsersService {
  constructor(private readonly _repository: UsersRepository) { }

  async perform(): Promise<User[]> {
    const usersData: User[] = await this._repository.findAll()

    return usersData
  }
}