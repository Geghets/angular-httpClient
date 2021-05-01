import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly Root_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers () {
    return this.http.get(this.Root_URL);
  }

  getUser(id: any) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }

  deleteUser(id: string) {

  }

  updateUser(id: string, data) {

  }

  createUser(data) {

  }

}
