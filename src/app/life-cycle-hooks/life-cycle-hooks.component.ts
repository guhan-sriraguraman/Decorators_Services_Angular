import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent {
  title:string='Guhan';
  titles:string[]=[];
  disabled:boolean=false;
  addClick()
  {
     this.titles.push(this.title);
     console.log(this.titles)
  }
  
}
