import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TourismService } from 'src/app/tourism.service';
import { database } from 'src/assets/data/data';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent {
  constructor(private tourism : TourismService, private router: Router){}
  database=this.tourism.getData();
  gotoHere(id:string){
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])
  }
}
