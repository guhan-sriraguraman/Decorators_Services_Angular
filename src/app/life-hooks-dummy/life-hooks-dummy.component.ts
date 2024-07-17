import { Component,Input,OnChanges, SimpleChanges,OnInit,DoCheck} from '@angular/core';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-life-hooks-dummy',
  templateUrl: './life-hooks-dummy.component.html',
  styleUrl: './life-hooks-dummy.component.css'
})
export class LifeHooksDummyComponent implements OnChanges,OnInit,DoCheck {
    @Input() text:string[]=[];
    noOfTitles=0;
    ngOnChanges(changes: SimpleChanges): void {
        // if(!changes['text'].firstChange){
        //    console.log("ngOnChanges Changes",changes['text'].currentValue);
        // }
        console.log("OnChanges is created")
    }
   ngOnInit(): void {
       this.text.push("firstName") // Before Component is loading 
       this.noOfTitles=1;
   }
  ngDoCheck(): void {
       if(this.text.length>this.noOfTitles)
        {
          this.noOfTitles++;
          console.log("Modified")
        }
  }
}  