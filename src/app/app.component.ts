import { Component } from '@angular/core';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name!:string;
  restart(){
    this.name='';
  }
  customers:Customer[]=[]
  getCustomers(customers:Customer[])
  {
    this.customers=customers
  }
}

