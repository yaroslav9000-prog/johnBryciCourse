import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './MainLayout/header/header.component';
import { SuccessComponent } from './MainLayout/success/success.component';
import { FailComponent } from './MainLayout/fail/fail.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SuccessComponent, FailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
  greeting = "Welcome to the angular club";
  name = "Yaroslav"
  
  Farenheit = 0;

  celciusToFaren = (event:any) =>{
    this.Farenheit = 9/5 * event.target.value + 32;
  }


  euro = 0;
  dollar = 0;
  canDollar = 0;
  fromSheqel = (event: any)=>{
    this.euro = event.target.value * 0.24868072;
    this.dollar = event.target.value * 0.26607969;
    this.canDollar = event.target.value * 0.36459154;
    
    // return [value * sheqelEuro, value * sheqelDollar, value* sheqelCanDollar]; 
  }

  inches = 0;

  cmToInches=(event: any)=>{
    this.inches = event.target.value * 0.3937; 
  }

  feet = 0;

  meterToFeet=(event: any)=>{
    this.feet = event.target.value * 3.28084;
  }
}
 

