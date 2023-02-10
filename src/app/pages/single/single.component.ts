import { Component } from '@angular/core';
import { TourismService } from 'src/app/tourism.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
single:any
constructor(private tourism: TourismService){}
ngOnInit():void{
  let id=localStorage.getItem('id')
  let singleDataArray=this.tourism.getData()
  console.log(singleDataArray);
  this.single=singleDataArray.filter(e=>e.title===id)
  console.log(this.single)

}
}
