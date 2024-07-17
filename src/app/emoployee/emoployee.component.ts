import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-emoployee',
  templateUrl: './emoployee.component.html',
  styleUrl: './emoployee.component.css'
})
export class EmoployeeComponent implements OnInit {
   constructor(private customerServices:CustomerService){}

   employee:Student[]=[]
   ngOnInit(): void {
       this.employee=this.customerServices.get();
   }
}
