import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { CreateUserDto } from '../../dtos/create-user.dto';

import { CreateUserService } from './create-user.service';

@Controller('/api/users')
export class CreateUserController {
  constructor(private _createUserService: CreateUserService) { }

  @Post()
  async handle(
    @Body() data: CreateUserDto, 
    @Req() request: Request, 
    @Res() response: Response
  ): Promise<Response> {
    const user = await this._createUserService.perform(data)

    return response.json(user)
  }
}