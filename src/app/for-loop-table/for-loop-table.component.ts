import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop-table',
  templateUrl: './for-loop-table.component.html',
  styleUrls: ['./for-loop-table.component.css']
})
export class ForLoopTableComponent {

  data=[1,2,3,4,5,6,7,8,9,10,11,12]
  no:number=0;
  showMultiplicationTable(no1:any) {
        this.no=eval(no1.value);
  }
}
