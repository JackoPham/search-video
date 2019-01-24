import { Get, Controller, Headers, Body, Post } from '@nestjs/common';
import { UserService } from '@business/user.service';
import User from '@entity/user.entity';

@Controller('user')
class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  root(): string {
    return this.userService.root();
  }
  @Post('login')
  async login(@Body() user: User) {
    return await this.userService.login(user);
  }
  @Post('create')
  async create(@Body() user: User) {
    return await this.userService.create(user);
  }
}
export default UserController;
