import { Injectable, Inject } from '@nestjs/common';
import User from '@entity/user.entity';
import UserRepository from '@repository/user.repository';
import IUserService from './interfaces/Iuser.service';
import DataBaseConstant from '@system/enums/database.enum';
import { SecurityHelper } from 'aluha-ezcode-helper';
import LoginModel from '@model/LoginModel';
import { Message } from '@model/common/Message';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(DataBaseConstant.USER_PROVIDER)
    private readonly userRepository: UserRepository,
  ) {}
  async login(data: LoginModel): Promise<any> {
    try {
      data.password = SecurityHelper.hashData(data.password);
      const user = await this.userRepository.findOne({
        where: {
          username: { $eq: data.username },
          password: { $eq: data.password },
        },
      });

      if (user) {
        const us = {
          fullname: user.fullname,
          _id: user.id,
          username: user.username,
        };
        const token = SecurityHelper.generateToken(us, '1d');
        return {
          user,
          token,
        };
      }
      return undefined;
    } catch (error) {
      throw error;
    }
  }
  async create(data: User): Promise<Message> {
    let msg = new Message(1, 'Register is so good');
    data.password = SecurityHelper.hashData(data.password);
    const result = await this.userRepository.save(data);
    if (!result) {
      msg = new Message(-1, 'Register not success');
    }
    return msg;
  }
  root(): string {
    try {
      return 'Api was working...';
    } catch (error) {
      throw error;
    }
  }
}
