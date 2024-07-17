import { Component ,OnInit} from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.css'
})
export class StudentViewComponent implements OnInit {
  constructor(private customerService:CustomerService){}

  student:Student[]=[]
  ngOnInit(): void {
      this.student=this.customerService.get() 
  }
}
