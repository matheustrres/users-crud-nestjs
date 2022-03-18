import { User } from '@prisma/client';

import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

export interface IUsersRepository {
  create(data: CreateUserDto): Promise<User>;
  delete(id: string): Promise<User>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  update(id: string, data: UpdateUserDto): Promise<User>;
}