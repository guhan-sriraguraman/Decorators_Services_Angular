import { Component } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrl: './add-list.component.css'
})
export class AddListComponent {
    car:string[]=[]

    name=""
    addCarName()
    {
      this.car.push(this.name);
    }




}
