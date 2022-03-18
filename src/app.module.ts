import { Module } from '@nestjs/common';

import { PrismaModule } from './modules/prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule
  ]
})

export class AppModule { }
