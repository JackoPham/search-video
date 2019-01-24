import { createConnection } from 'typeorm';
import Project from '@config/Project';
import DataBaseConstant from '@system/enums/database.enum';
import * as chalk from 'chalk';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import User from '@entity/user.entity';
const db = Project.DATABASES.find(db => db.NAME === 'default')!;
const color = chalk.default;
const dbconfig: MongoConnectionOptions = {
  type: 'mongodb',
  host: db.HOST,
  port: db.PORT,
  username: db.USERNAME,
  password: db.PASSWORD,
  synchronize: true,
  logging: false,
  logger: 'file',
  useNewUrlParser: true,
  entities: [User],
};
export const databaseProviders = [
  {
    provide: DataBaseConstant.AUTHEN,
    useFactory: async () =>
      await createConnection({ ...dbconfig, database: db.DB_NAME })
        .then(connection => {
          console.info(
            `Database is connected with host ${color.green(
              `http://${connection.options['host']}:${
                connection.options['port']
              }`,
            )}[${color.yellow(connection.options['database'] + '')}]`,
          );
          return connection;
        })
        .catch(error => {
          console.error(error);
          return error;
        }),
  },
];
