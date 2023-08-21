import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'First-Angular';
  name ="Viren";
  age = 23;

  display(){
    return "display() is called";
  }


}
