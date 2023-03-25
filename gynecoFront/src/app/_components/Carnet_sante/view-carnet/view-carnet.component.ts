import { Component,OnInit} from '@angular/core';
import { Carnet } from 'src/app/_models/carnet';
import{CarnetService} from 'src/app/_services/carnet.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-view-carnet',
  templateUrl: './view-carnet.component.html',
  styleUrls: ['./view-carnet.component.css']
})
export class ViewCarnetComponent implements OnInit{
  id!:String
  carnets!:Carnet; 
  photo: any = null;
  constructor(   private router : Router, private route: ActivatedRoute,private C:CarnetService, ){}
  loadImage(photo: any) {
    this.photo = photo.target.files[0];
    console.log(this.photo);
  } 
  
  getCarnetByID(id:any): void {
   this.C.find(id).subscribe((data:Carnet)=>{
      this.carnets = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
        
    this.getCarnetByID(this.id);
}
  }
