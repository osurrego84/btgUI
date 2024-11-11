import { Component, inject, OnInit } from '@angular/core';
import { FundService } from '../services/fund.service';
import { HomeService } from '../services/home.service';
import ListCategoryComponent from "../list-category/list-category.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-subscriptions-form-fic',
  standalone: true,
  imports: [ListCategoryComponent,RouterModule],
  templateUrl: './subscriptions-form-fic.component.html',
  styleUrl: './subscriptions-form-fic.component.css'
})
export default class SubscriptionsFormFICComponent implements OnInit{
  private fundService = inject(FundService)
  private homeService = inject(HomeService)
  listFund:any = []
  homeInfo:any = null;
  ngOnInit(): void {
    this.homeService.loadHome().subscribe(dataHome =>{
      this.homeInfo = dataHome;
    })
    this.fundService.getFundCategory('FIC').subscribe(fundData=>{
      this.listFund = fundData;
    });
  }

}  

