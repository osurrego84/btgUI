import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-subscriptions-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './subscriptions-form.component.html',
  styleUrl: './subscriptions-form.component.css'
})
export default class SubscriptionsFormComponent implements OnInit{
  private homeService = inject(HomeService)
  homeInfo:any = null;
  ngOnInit(): void {
    this.homeService.loadHome().subscribe(dataHome =>{
      this.homeInfo = dataHome;
    })
  }

}
