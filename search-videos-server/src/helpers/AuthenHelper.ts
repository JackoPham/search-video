import { AuthenHelper, DataHelper, SecurityHelper } from 'aluha-ezcode-helper';
import { ForbiddenException, UnauthorizedException } from '@nestjs/common';
// tslint:disable-next-line:variable-name
const Enumerable = require('linq');
export class Authen {
  static async checkPermission(action: any, roles: string[]) {
    try {
      const user = SecurityHelper.getToken(action);
      if (user) return true;
      throw new UnauthorizedException('Permission denied!');
    } catch (error) {
      return false;
    }
  }

  static async removeToken(token: string) {
    const result = await AuthenHelper.removeRedisByKey(token);
    return result;
  }
}
