import User from '@entity/user.entity';
import { Message } from '@model/common/Message';

interface IUserService {
  login(data: User): Promise<User | undefined>;
  create(data: User): Promise<User>;
}

export default IUserService;
