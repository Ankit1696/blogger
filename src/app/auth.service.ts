import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterPayload} from "./auth/register-payload";
import {Observable} from "rxjs";
import {LoginPayload} from "./auth/login-payload";
import {JwtAuthResponse} from "./auth/jwt-auth-response";
import {map} from "rxjs/operators";
import {LocalStorageService} from "ngx-webstorage";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8080/api/auth/";
  private localStorageService: LocalStorageService;

  constructor(private  httpClient:HttpClient, localStorageService: LocalStorageService) {
    this.localStorageService = localStorageService;
  }

  register(registerPayload: RegisterPayload): Observable<any>{
    return this.httpClient.post(this.url + "signup", registerPayload);
  }

  login(loginPayload: LoginPayload):Observable<boolean> {
    return this.httpClient.post<JwtAuthResponse>(this.url+"login", loginPayload).pipe(
      map( data => {

        this.localStorageService.store("authenticationToken", data.authenticationToken);
        this.localStorageService.store("username", data.username);
        return true;
      })
    );
  }

  isAuthenticated():Boolean{
    return this.localStorageService.retrieve('username') !=null;
  }

}
