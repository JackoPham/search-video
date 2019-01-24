import { Injectable, Inject } from '@nestjs/common';
import User from '@entity/user.entity';
import UserRepository from '@repository/user.repository';
import IUserService from './interfaces/Iuser.service';
import DataBaseConstant from '@system/enums/database.enum';
import { SecurityHelper } from 'aluha-ezcode-helper';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(DataBaseConstant.USER_PROVIDER)
    private readonly userRepository: UserRepository,
  ) {}
  async login(data: User): Promise<User> {
    data.password = SecurityHelper.hashData(data.password);
    return await this.userRepository.findOne({
      where: {
        username: { $eq: data.username },
        password: { $eq: data.password },
      },
    });
  }
  async create(data: User): Promise<User> {
    data.password = SecurityHelper.hashData(data.password);
    const result = await this.userRepository.save(data);
    return result;
  }
  root(): string {
    try {
      return 'Api was working...';
    } catch (error) {
      throw error;
    }
  }
}
