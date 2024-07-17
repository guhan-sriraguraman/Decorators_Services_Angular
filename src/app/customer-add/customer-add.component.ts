import { Component ,EventEmitter, Output} from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent {

  name:string=''
  customers:Customer[]=[]

  addCustomers(customerName:string){
     const customers=new Customer()
     customers.name=customerName;
     this.customers.push(customers)
     this.name=''
     this.customersAdded.emit(this.customers)
    
     
  }
  @Output() customersAdded=new EventEmitter<Customer[]>

  
}
