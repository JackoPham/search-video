import { SystemHelper } from 'aluha-ezcode-helper';
const config = SystemHelper.Development;

class Development {
  static DATABASES = [
    {
      NAME: 'default',
      HOST: config.DATABASES.MONGO.HOST,
      PORT: config.DATABASES.MONGO.PORT,
      DB_NAME: config.DATABASES.MONGO.DB_NAME,
      USERNAME: config.DATABASES.MONGO.USERNAME,
      PASSWORD: config.DATABASES.MONGO.PASSWORD,
    },
  ];

  static RABBITMQ = {
    HOST: config.RABBITMQ.HOST,
    USER: config.RABBITMQ.USER,
    PWD: config.RABBITMQ.PWD,
  };
  static eventStoreSettings = () => ({
    type: 'mongodb',
    host: config.EVENT_STORE.HOST,
    port: config.EVENT_STORE.PORT,
    dbName: config.EVENT_STORE.DB_NAME,
    username: config.EVENT_STORE.USERNAME,
    password: config.EVENT_STORE.PASSWORD,
    eventsCollectionName: 'events',
    snapshotsCollectionName: 'snapshots',
    transactionsCollectionName: 'transactions',
    // options: {
    //     useNewUrlParser: true
    // }
    // url: `mongodb://192.168.1.87:27018/eventstore`;
  });
  static SMTP = {
    AUTHENTICATOR: {
      USERNAME: '[Authenticator Email]',
      PASSWORD: '[Password]',
    },
    SENDER: {
      NAME: '[Sender Name]',
      EMAIL: '[Sender Email]',
    },
  };
}

export default Development;
