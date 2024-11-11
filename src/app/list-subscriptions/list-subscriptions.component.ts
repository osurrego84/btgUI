import { Component, inject, Input, OnInit } from '@angular/core';
import { SubscriptionsService } from '../services/subscriptions.service';
import { FundService } from '../services/fund.service';
import { DatePipe } from '@angular/common';
import { HomeService } from '../services/home.service';
import { Router, RouterModule } from '@angular/router';
import { HistoricalLogService } from '../services/HistoricalLog.service';
declare var bootstrap: any;
@Component({
  selector: 'app-list-subscriptions',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './list-subscriptions.component.html',
  styleUrl: './list-subscriptions.component.css'
})

export class ListSubscriptionsComponent implements OnInit{

  @Input() user :any | undefined;
  private subscriptionsService = inject(SubscriptionsService)
  private fundService = inject(FundService)
  private homeService = inject(HomeService)
  private historicalLogService = inject(HistoricalLogService)
  subscriptionsInfo:any = null;
  listFund:any = []
  isSubscriptionsInfo = false
  constructor(private router: Router) { }
  ngOnInit(): void {
    if(this.user.id != undefined){
      this.subscriptionsService.loadSubscriptions(this.user.id).subscribe(
        {
          next: dataSubscriptionsService =>  this.subscriptionsInfo = dataSubscriptionsService,
          error: err => this.isSubscriptionsInfo=true
        });
    }
    this.fundService.getFund().subscribe(fundData=>{
      this.listFund = fundData;
    });
  }
  
  getNameCategory(id: any) {
    return this.listFund[id-1].category;
  }
  getNameSubscriptions(id: any) {
    return this.listFund[id-1].name;
  }

  selectedId: string | null = null;
  selectedAmount: any | null = null;
  delete(){
    this.subscriptionsService.deleteSubscriptions(this.selectedId).subscribe(
      {
        next: dataSubscriptionsService =>  {},
        error: err => {}
      });
      const bodyH = {
        user_id:this.user.id,
        fund_id:this.selectedId,
        operation:"cancelaciones",
        detail:"cancelaciones de Fondo de Pensiones",
        amount:this.user.balance.replace(".", ''),
        remaining_balance:""
      }
      this.user.balance = (Number(this.user.balance.replace(".", ''))+ Number(this.selectedAmount.replace(".", '')));
      bodyH.remaining_balance =this.user.balance
      this.homeService.updateUser(this.user.id,this.user).subscribe();
      this.historicalLogService.createHistoricalLog(bodyH).subscribe();
      this.closeModal();
      setTimeout(() => {
        this.ngOnInit();
      }, 2000); 
    
  }
  closeModal() {
    const modalElement = document.getElementById('exampleModal'); 
    const modal = bootstrap.Modal.getInstance(modalElement!);
    modal.hide();
  }
  setSelectedId(id: string,amount:any): void {
    this.selectedId = id;
    this.selectedAmount =amount;
  }

}
