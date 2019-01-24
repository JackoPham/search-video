import { Module } from '@nestjs/common';
import UserController from '@controllers/user.controller';
import { DatabaseModule } from '@system/database/database.module';
import { userProviders } from '@provider/user.provider';
import { UserService } from '@business/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    ...userProviders,
    { provide: 'IUserService', useClass: UserService },
  ],
})
export class UserModule {}
