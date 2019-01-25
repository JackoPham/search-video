import { Connection } from 'typeorm';
import User from '@entity/user.entity';
import DataBaseConstant from '@system/enums/database.enum';

export const userProviders = [
  {
    provide: DataBaseConstant.USER_PROVIDER,
    useFactory: (connection: Connection, errr: any) => {
      return connection.getRepository(User);
    },
    inject: [DataBaseConstant.AUTHEN],
  },
];
