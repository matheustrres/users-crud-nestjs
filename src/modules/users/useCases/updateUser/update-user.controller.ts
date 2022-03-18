import { Controller, Body, Patch, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { User } from '@prisma/client';

import { UpdateUserDto } from '../../dtos/update-user.dto';

import { UpdateUserService } from './update-user.service';

@Controller('/api/users')
export class UpdateUserController {
  constructor(private _updateUserService: UpdateUserService) { }

  @Patch(':id')
  
  async handle(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
    @Req() request: Request,
    @Res() response: Response
  ): Promise<Response> { 
    const user: User = await this._updateUserService.perform(id, data)

    return response.json(user)
  }
}