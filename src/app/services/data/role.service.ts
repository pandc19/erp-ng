import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private http: HttpClient,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  retrieveAllUsers() {
    return this.http.get<any>(`${API_URL}/roles/${this.basicAuthenticationService.getAuthenticatedUser()}/admin/erp`);
  }
}
