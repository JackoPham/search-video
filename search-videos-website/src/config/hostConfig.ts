import { IHostConfig } from './iHostConfig';
import { Constants } from './constants';
export const hostConfig: IHostConfig = {
  MAIN_HOST: Constants.HOST_API,
  PM2_API: Constants.PM2_API,
  Protocol: 'http://',
};
