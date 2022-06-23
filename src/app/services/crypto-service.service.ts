import { Injectable } from '@angular/core';
import * as Crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoServiceService {

  secretKey = "clave Secreta";

  constructor() { }

  encrypt(value: string){
    return Crypto.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(encrypted: string){
    try {
      return Crypto.AES.decrypt(encrypted, this.secretKey.trim()).toString(Crypto.enc.Utf8);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
