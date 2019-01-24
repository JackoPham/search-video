import * as moment from 'moment';
export default class DateHelper {
  static currentDate = new Date();

  static getRemainTime(input: string) {
    const a = moment(input);
    const b = moment();
    const hours = b.diff(a, 'hours'); // days
    return hours;
  }

  static format(value, format = 'DD-MM-YYYY HH:mm:ss') {
    const date = moment(value).format(format);
    return date;
  }

  static getTimeBetweenDate(date) {
    const currentTime = new Date().getTime();
    const expiredTime = new Date(date).getTime();
    return currentTime - expiredTime;
  }
}
