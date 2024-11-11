import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private  http = inject(HttpClient)
  PATH_HOME = 'http://localhost:8080/api/user/all';
  PATH_UPDATE = 'http://localhost:8080/api/user/';
  constructor() { }

  loadHome(){
    return this.http.get(this.PATH_HOME);
  }
  updateUser(id:string,user:any){
    return this.http.put(this.PATH_UPDATE.concat(id),user);
  }

}
