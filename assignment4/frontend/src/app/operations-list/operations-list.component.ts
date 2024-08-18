import { Component, inject, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { OperationService } from '../operations.service';
import { OperationComponent } from './operation/operation.component';

@Component({
  selector: 'app-operations-list',
  standalone: true,
  imports: [OperationComponent],
  templateUrl: './operations-list.component.html',
  styleUrl: './operations-list.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class OperationsListComponent{
  private operationsService = inject(OperationService);

  get getOperations(){
    return this.operationsService.Operations();
  }  
}
