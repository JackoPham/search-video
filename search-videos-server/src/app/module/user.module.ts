import { Module } from '@nestjs/common';
import UserController from '@controllers/user.controller';
import { UserService } from '@business/user.service';
import { DatabaseModule } from '@system/database/database.module';
import { userProviders } from '@provider/user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, UserService],
})
export class UserModule {}
