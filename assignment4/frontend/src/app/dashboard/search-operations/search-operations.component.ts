import { FormsModule } from '@angular/forms';
import { OperationService } from './../../operations.service';
import { Component, inject, Input, signal, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-search-operations',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-operations.component.html',
  styleUrl: './search-operations.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SearchOperationsComponent {
  accountNum = '';
  private operationService = inject(OperationService);



  onSearch(){
    console.log(this.accountNum);
    this.operationService.getClientOperations(+this.accountNum);
    this.accountNum = '';
  }

}
