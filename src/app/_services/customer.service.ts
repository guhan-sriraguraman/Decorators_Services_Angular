import { Injectable } from '@angular/core';

import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  students:Student[]=[]
  add(studentName:string){
    const students=new Student()
    students.name=studentName;
    this.students.push(students)
    
  }
  get(){
    return this.students;
  }
}
