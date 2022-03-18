import { BadRequestException, Injectable } from '@nestjs/common';

import { User } from '@prisma/client';

import { UsersRepository } from '../../infra/repositories/users.repository';

@Injectable()
export class DeleteUserService {
  constructor(private readonly _repository: UsersRepository) { }

  async perform(id: string): Promise<User> {
    const userData: User = await this._repository.findById(id)

    if (!userData) throw new BadRequestException('User does not exists!')

    const oldUserData: User = await this._repository.delete(id)

    return oldUserData
  }
}