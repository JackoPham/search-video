import { environment } from 'src/environments/environment';

export class Constants {
  static returnUrl = '';
  static readonly HOST_API = environment.host_api; // process.env.NODE_MODE === 'dev' ? 'http://localhost:17093' : 'https://search-videos-server.herokuapp.com/';
  static PM2_API = environment.pm2_url;
  static readonly DATE_FMT = 'dd/MM/yyyy hh:mm:ss';
  static readonly DATE__SERVIER_FMT = 'yyyy/MM/dd hh:mm:ss';
  static readonly DATE_TIME_FMT = `${Constants.DATE_FMT} hh:mm:ss`;
  static pageTitle = 'Welcome to Rubik Blog';
  static readonly MESS_VALIDATION = {
    required: '{0} là thông tin bắt buộc',
    rbMin: '{0} nhỏ nhất là {1}',
    max: '{0} lớn nhất là {1}',
    minlength: '{0} chiều dài tối thiểu là {1}',
    maxlength: '{0} chiều dài tối đa là {2}',
    compare: '{0} không trùng với {1}',
    isnumber: '{0} phải là kiểu số',
    email: '{0} không đúng định dạng',
  };
}
