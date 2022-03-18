import { Controller, Delete, HttpCode, HttpStatus, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { User } from '@prisma/client';

import { DeleteUserService } from './delete-user.service';

@Controller('/api/users')
export class DeleteUserController {
  constructor(private _deleteUserService: DeleteUserService) { }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async handle( 
    @Param('id') id: string,
    @Req() request: Request,
    @Res() response: Response
  ): Promise<Response> { 
    const user: User = await this._deleteUserService.perform(id)

    return response.json(user)
  }
}