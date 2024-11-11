import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  private  http = inject(HttpClient)
  PATH_HOME = 'http://localhost:8080/api/subscription/';
  PATH_ADD = 'http://localhost:8080/api/subscription/add';
  PATH_DELETE = 'http://localhost:8080/api/subscription/';
  constructor() { }
  loadSubscriptions(id:string){
    return this.http.get(this.PATH_HOME.concat(id));
  }
  createSubscriptions(subscription:any){
    return this.http.post(this.PATH_ADD,subscription);
  }
  deleteSubscriptions(id:any){
    return this.http.delete(this.PATH_DELETE.concat(id));
  }
}
