import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeService } from '../services/home.service';
import { HistoricalLogService } from '../services/HistoricalLog.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-log',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './list-log.component.html',
  styleUrl: './list-log.component.css'
})
export default class ListLogComponent implements OnInit {
  private homeService = inject(HomeService)
  private historicalLogService = inject(HistoricalLogService)
  historicalLogInfo:any = null;
  homeInfo:any = null;
  ngOnInit(): void {
    this.homeService.loadHome().subscribe(dataHome =>{
      this.homeInfo = dataHome;
    })

      this.historicalLogService.getall().subscribe(
        {
          next: historical =>  this.historicalLogInfo = historical,
          error: err => {}
        });
    
  }

}
