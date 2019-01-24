import { IsNotEmpty } from 'class-validator';
export default class LoginModel {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
