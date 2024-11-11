import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SubscriptionsService } from '../services/subscriptions.service';
import { HomeService } from '../services/home.service';
import { HistoricalLogService } from '../services/HistoricalLog.service';
declare var bootstrap: any;

@Component({
  selector: 'app-list-category',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.css'
})
export default class ListCategoryComponent implements OnInit{
  ngOnInit(): void {

  }
  private subscriptionsService = inject(SubscriptionsService)
  private homeService = inject(HomeService)
  private historicalLogService = inject(HistoricalLogService)
  @Input() listCategory :any | undefined;
  @Input() user :any | undefined;
  private fb = inject(FormBuilder)

  form = this.fb.group({
    amount: ['',[Validators.required]],
    notification:['',[Validators.required]]
  });
  method:any = ''
  messageValidate = '';
  create(){
    this.method = this.form.value.notification;
    const body = {
      user_id:this.user.id,
      fund_id:this.selectedId,
      amount:this.form.value.amount
    }
    const bodyH = {
      user_id:this.user.id,
      fund_id:this.selectedId,
      operation:"Apertura",
      detail:"Apertura de Fondo de Pensiones",
      amount:this.user.balance.replace(".", ''),
      remaining_balance:""
    }
    this.messageValidate = this.validateAmountAvailable(Number(this.user.balance.replace(".", '')),Number(this.form.value.amount),Number(this.selectedMini.replace(".", '')),this.method);
    if(this.messageValidate === 'La compra puede ser realizada.'){
      this.subscriptionsService.createSubscriptions(body).subscribe(  {
        next: dataSubscriptionsService =>  {
          
          this.user.balance = (Number(this.user.balance.replace(".", ''))-Number(this.form.value.amount));
          bodyH.remaining_balance =this.user.balance
          this.homeService.updateUser(this.user.id,this.user).subscribe();
          this.historicalLogService.createHistoricalLog(bodyH).subscribe();
          this.closeModal();
          this.openModal();
        },
        error: err => {console.log(err)}
      })
    }
  }
  closeModal() {
    const modalElement = document.getElementById('exampleModal'); 
    const modal = bootstrap.Modal.getInstance(modalElement!);
    modal.hide();
  }

  openModal() {
    const modalElement = document.getElementById('exampleModal-success'); 
    const modal = new bootstrap.Modal(modalElement!); 
    modal.show();
  }

  validateAmountAvailable(availableAmount: number, amount: number, minimumAmount: number,method:string): string {
    if (amount < minimumAmount) {
      return `El monto mínimo para adquirir el producto es de COP $${minimumAmount}. Su monto enviado es de COP $${amount}.`;
    }
    if (amount > availableAmount) {
      return `El monto solicitado excede el monto disponible. Solo tiene COP $${availableAmount}, pero desea adquirir un producto de COP $${amount}.`;
    }
    if(method.length===0){
      return "Select a shipping method."
    }
    return 'La compra puede ser realizada.';
  }
  selectedId: number | null = null;
  selectedMini: any | null = null;

  setSelectedId(id: number,mini: any): void {
    this.selectedId = id;
    this.selectedMini = mini;
  }
}

