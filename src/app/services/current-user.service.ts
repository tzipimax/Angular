import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUser = {
    name: 'aaa',
    role: 'agent',
  }

  getCurrentUser() {
    return this.currentUser;
  }
  constructor() { }

}
