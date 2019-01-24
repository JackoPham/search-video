import User from '@entity/user.entity';
import LoginModel from '@model/LoginModel';
import { Message } from '@model/common/Message';

interface IUserService {
  login(data: LoginModel): Promise<any | undefined>;
  create(data: User): Promise<Message>;
}

export default IUserService;
