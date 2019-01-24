import * as CryptoJS from 'crypto-js';

export default class SecurityHelper {
  static secrectKey = 'akes!@#616b6573214023@#$#%24023242325324024402340@#$#%2232473646653@#$#%244465';
  static authenKey = 'aluha.personal.tool';
  static encrypt(data: string) {
    if (!data) {
      return '';
    }
    const ciphertext = CryptoJS.AES.encrypt(data, this.secrectKey);
    return ciphertext.toString();
  }

  static decrypt(data: string) {
    if (!data) {
      return null;
    }
    const bytes = CryptoJS.AES.decrypt(data, this.secrectKey);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  }

  static createStore(key: string, data: any) {
    if (data) {
      const hashData = this.encrypt(JSON.stringify(data));
      localStorage.setItem(key, hashData);
    }
  }

  static getStore(key: string) {
    const hashData = localStorage.getItem(key);
    if (hashData) {
      const plainText = this.decrypt(hashData);
      if (plainText) {
        const result = JSON.parse(plainText);
        return result;
      }
    }
    return undefined;
  }

  static removeStore(key: string) {
    localStorage.removeItem(key);
  }

  static createStoreAuthen(data: any) {
    this.createStore(this.authenKey, data);
  }
  static getStoreAuthen() {
    return this.getStore(this.authenKey);
  }
  static destroyAuthen() {
    this.removeStore(this.authenKey);
  }
}
