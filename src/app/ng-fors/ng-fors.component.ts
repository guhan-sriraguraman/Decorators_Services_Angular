import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-ng-fors',
  templateUrl: './ng-fors.component.html',
  styleUrl: './ng-fors.component.css'
})
export class NgForsComponent {
       title:string="nfFor EXAMPLES"
       movie:Movies[]=[ 
        {
          movieName:"I",
        },
        {
          movieName:"Irumbuthirai",
        },
        {
          movieName:"Irandam Ulagam",
        },
        {
          movieName:"Iruvar",
        }
        ]
        @Input('carsInput')  cars:string[]=[]
    

}
      class Movies{
         movieName!:string
      }
