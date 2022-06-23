import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeadersService } from './headers.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VorofxService {

  private baseUrl = environment.url_api;


  constructor(private http: HttpClient, private headers: HeadersService) { }

  signup(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data, this.headers.getAuthHeaders());
  }
  login(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data, this.headers.getAuthHeaders());
  }
  sendPasswordResetLink(data: any) {
    return this.http.post(`${this.baseUrl}/confirm/password`, data, this.headers.getAuthHeaders());
  }
  changePassword(data: any) {
    return this.http.post(`${this.baseUrl}/password/reset`, data, this.headers.getAuthHeaders());
  }
  partner(data: any) {
    return this.http.post(`${this.baseUrl}/register_socio`, data, this.headers.getAuthHeaders());
  }
  contact(data: any) {
    return this.http.post(`${this.baseUrl}/contact`, data, this.headers.getAuthHeaders());
  }
  contactUs(data: any) {
    return this.http.post(`${this.baseUrl}/contactUs`, data, this.headers.getAuthHeaders());
  }
  activationToken(data: any) {
    return this.http.post(`${this.baseUrl}/activation_token`, data, this.headers.getAuthHeaders());
  }
  vorofxSubscription(data: any) {
    return this.http.post(`${this.baseUrl}/vorofx_subscription`, data, this.headers.getAuthHeaders());
  }
  ebookSubscription(data: any) {
    return this.http.post(`${this.baseUrl}/ebook_subscription`, data, this.headers.getAuthHeaders());
  }
  downloadEbook(data: any) {
    return this.http.post(`${this.baseUrl}/download_ebook`, data, this.headers.getAuthHeaders());
  }
  getPdf() {
    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      })
    };

    return this.http.get(`${this.baseUrl}/download-pdf`, httpOptions);
  }

  invierteTuRealidad(data: any) {
    return this.http.post(`${this.baseUrl}/invierte-tu-realidad`, data, this.headers.getAuthHeaders());
  }

  invierteTusCryptos(data: any){
    return this.http.post(`${this.baseUrl}/invierte-tus-cryptos`, data, this.headers.getAuthHeaders());
  }

  vorofxSubscriptionCryptos(data: any) {
    return this.http.post(`${this.baseUrl}/vorofx_invierte_tus_cryptos`, data, this.headers.getAuthHeaders());
  }

  vorofxDesubscription(data: any){
    return this.http.post(`${this.baseUrl}/vorofx_desubscription`, data, this.headers.getAuthHeaders());
  }

  login2fact(data: any){
    return this.http.post(`${this.baseUrl}/loginA2F`, data, this.headers.getAuthHeaders());
  }

  resendCode(data: any){
    return this.http.post(`${this.baseUrl}/reenviar`, data, this.headers.getAuthHeaders());
  }

  verifyEmailAndPassword(data: any){
    return this.http.post(`${this.baseUrl}/verifyEmail`, data, this.headers.getAuthHeaders());
  }

  sendNumberRequest(data: any){
    return this.http.post(`${this.baseUrl}/sendSMSCode`, data, this.headers.getAuthHeaders());
  }

  sendCodeVerify(data: any){
    return this.http.post(`${this.baseUrl}/codeVerify`, data, this.headers.getAuthHeaders());
  }

  test(){
    return this.http.get(`${this.baseUrl}/categories/1`);
  }

  step2(data: any){
    return this.http.post(`${this.baseUrl}/step2`, data, this.headers.getAuthHeaders());
  }

  step3(data: any){
    return this.http.post(`${this.baseUrl}/step3`, data, this.headers.getAuthHeaders());
  }

  step4(data: any){
    return this.http.post(`${this.baseUrl}/step4`, data, this.headers.getAuthHeaders());
  }

  step5(data: any){
    return this.http.post(`${this.baseUrl}/step5`, data, this.headers.getAuthHeaders());
  }
}
