import { Controller, Body, Post, UseGuards, Inject } from '@nestjs/common';
import User from '@entity/user.entity';
import LoginModel from '@model/LoginModel';
import { AuthGuard } from '@system/guard/auth.guard';
import { Authorized } from '@system/decorator/roles.decorator';
import IUserService from '@business/interfaces/Iuser.service';

@Controller('user')
class UserController {
  constructor(
    @Inject('IUserService') private readonly userService: IUserService,
  ) {}

  @Post('login')
  async login(@Body() user: LoginModel) {
    return await this.userService.login(user);
  }
  @Post('create')
  async create(@Body() user: User) {
    return await this.userService.create(user);
  }
}
export default UserController;
