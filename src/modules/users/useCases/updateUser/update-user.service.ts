import { BadRequestException, Injectable } from '@nestjs/common';

import { User } from '@prisma/client';

import { UpdateUserDto } from '../../dtos/update-user.dto';

import { UsersRepository } from '../../infra/repositories/users.repository';

@Injectable()
export class UpdateUserService {
  constructor(private readonly _repository: UsersRepository) { }

  async perform(id: string, data: UpdateUserDto): Promise<User> {
    const userData: User = await this._repository.findById(id)

    if (!userData) throw new BadRequestException('User does not exists!')

    const newUserData: User = await this._repository.update(id, data)

    return newUserData
  }
}