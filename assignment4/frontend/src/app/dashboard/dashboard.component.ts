import { Component, ViewEncapsulation } from '@angular/core';
import { SearchOperationsComponent } from './search-operations/search-operations.component';
import { NewOperationComponent } from "./new-operation/new-operation.component";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SearchOperationsComponent, NewOperationComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {

}
