import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { ListSubscriptionsComponent } from "../list-subscriptions/list-subscriptions.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListSubscriptionsComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export  default class HomeComponent implements OnInit {
  private homeService = inject(HomeService)

  homeInfo:any = null;
  ngOnInit(): void {
    this.homeService.loadHome().subscribe(dataHome =>{
      this.homeInfo = dataHome;
    })
  }
}
