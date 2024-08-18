import { Component, inject, input, Input, ViewEncapsulation } from '@angular/core';
import { Operation } from '../../operation.model';
@Component({
  selector: 'app-operation',
  standalone: true,
  imports: [],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css',
  encapsulation: ViewEncapsulation.None
})
export class OperationComponent {
  @Input() public operationObj!: Operation;
  
}
