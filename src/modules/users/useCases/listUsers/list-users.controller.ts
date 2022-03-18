import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { ListUsersService } from './list-users.service';

@Controller('/api/users')
export class ListUsersController {
  constructor(private _listUsersService: ListUsersService) { }

  @Get()
  async handle(
    @Req() request: Request,
    @Res() response: Response
  ): Promise<Response> {    
    const users = await this._listUsersService.perform()

    return response.json(users)
  }
}