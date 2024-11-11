import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private  http = inject(HttpClient)
  PATH = 'http://localhost:8080/api/fund/all';
  PATH_CATEGORY = 'http://localhost:8080/api/fund/filter/';
  constructor() { }
  getFund(){
    return this.http.get(this.PATH);
  }
  getFundCategory(category:string){
    return this.http.get(this.PATH_CATEGORY.concat(category));
  }

}
