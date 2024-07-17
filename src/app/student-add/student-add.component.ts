import { Component } from '@angular/core';


import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {

  constructor(private customerService:CustomerService){}
  name:string=''
  
  addStudent(studentName:string){
    this.customerService.add(studentName)
    this.name=''    
 }
}
