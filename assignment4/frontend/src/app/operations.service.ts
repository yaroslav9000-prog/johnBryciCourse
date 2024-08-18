import { inject, Injectable, signal } from '@angular/core';
import { Operation } from './operation.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private httpClient = inject(HttpClient)
  public Operations = signal<Operation[]>([]);
  public postOperation = signal<any>({}); 

  outputMyAccount(accNumber: string){
    const myNum = +accNumber;
    console.log(myNum);
  }
  getClientOperations(accountNum: number){
    this.httpClient.get<any>("http://localhost:3500/accounts/" +accountNum).subscribe({
      next: (resData)=>{
        this.Operations.set(resData.results);
        console.log(this.Operations());
      }
    })
  } 
  

  createNewOperation(value: any){
     this.httpClient.post<Operation>("http://localhost:3500/accounts/", value).subscribe({next: (v)=>console.log(v)});
    }
  
}
