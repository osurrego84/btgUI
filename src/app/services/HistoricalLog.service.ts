import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoricalLogService {

  private  http = inject(HttpClient)
  PATH = 'http://localhost:8080/api/historicalLog/all';
  PATH_ADD = 'http://localhost:8080/api/historicalLog/add';
  constructor() { }
  getall(){
    return this.http.get(this.PATH);
  }
  createHistoricalLog(historicalLog:any){
    return this.http.post(this.PATH_ADD,historicalLog);
  }

}
