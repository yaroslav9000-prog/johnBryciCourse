import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgFor} from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgClass, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shirly';
  classArray = ["red","yellow","green","orange"];
  pointer = 1;
  
  randomNumber = Math.floor(Math.random() * 2);

  boyGirlArray = new Array<string>(20);
  nameArray = ['Gabriel', 'Ilan', 'Shirly', 'Zeev', 'Matti', 'Yaroslav', 'Ofir', 'Semyon'];
  colorArray = ['boy', 'girl'];
  
  giveRandomArray(){
    for(let index = 0; index < this.boyGirlArray.length; index++){
      index% 2 == 1?
       this.boyGirlArray[index] =this.nameArray[Math.floor(Math.random() * this.nameArray.length)]: 
       this.boyGirlArray[index] = this.colorArray[Math.floor(Math.random() * this.colorArray.length)]
    }
    return this.boyGirlArray;
  }
  
  
}


/*
צרו 3 קלאסים בקומפננט עיצוב, ובתוך הפקודות צרו מערך המכיל את 3 המחלקות שייצרתם
בתצוגה, צרו כפתור הבא שבכל פעם שנלחץ עליו הוא יעבור למחלקה הבאה תשפיע על אלמנט מכיל כלשהוא
ותגרום לו בכל פעם להיות מושפע ממחלקת עיצוב אחרת לפי הסדר במערך
כאשר נהיה בתא השני (האחרון) ונלחץ הבא, הוא יחזור לתא 0
*/