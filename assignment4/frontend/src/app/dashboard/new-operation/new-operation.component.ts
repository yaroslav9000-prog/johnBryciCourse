import { Component, inject, Input, input, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperationService } from '../../operations.service';

@Component({
  selector: 'app-new-operation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-operation.component.html',
  styleUrl: './new-operation.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NewOperationComponent {
  private operationsService = inject(OperationService);
  accountNum:string = '';
  operationType:string = '';
  amount:string = '';
  paymentAmount:string = '';
  interest:string = '';
  date:string = '';

  onSubmit(){
    if(this.operationType == "deposit" || this.operationType == "withdraw"){
      const currObject = {
        "accountNum": +this.accountNum,
        "operationType": {
          "operationType": this.operationType,
          "date": this.date,
          "amount": +this.amount
        }
      }
      
    this.operationsService.createNewOperation(currObject);
    }else{
      const currObject = {
        "accountNum": +this.accountNum,
        "operationType": {
          "operationType": this.operationType,
          "date": this.date,
          "amount": +this.amount,
          "interest": +this.paymentAmount
          
        }
      }
    this.operationsService.createNewOperation(currObject);
    }
    this.operationType = '';
    this.accountNum = '';
    this.amount = '';
    this.date = '';    
  }
}
