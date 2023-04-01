import { Component,OnInit} from '@angular/core';
import { Carnet } from 'src/app/_models/carnet';
import{CarnetService} from 'src/app/_services/carnet.service';
import {MatDialog} from '@angular/material/dialog';
import{AddCarnetComponent} from '../add-carnet/add-carnet.component'
@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {

  Carnet:any=[]; 

  constructor( private C:CarnetService,private dialog :MatDialog) { }

  openDialog() {
    this.dialog.open(AddCarnetComponent, {
     width: '30%'

    });
  }
  //methode d'affichage de la liste
  listCarnet() {
    this.C.getCarnet().subscribe(
      (data) => {
        this.Carnet= data;
        console.log(data);
      },
      (err:any) => {
        console.log(err);
      }
    );
  }
  
ngOnInit(): void {
  this.listCarnet();
}

 //  supression 
 deleteCarnet(_id:String)
 {
 this.C.deleteCarnet(_id).subscribe(() => {
 alert("toutes les informations sont  supprimées ");
 }); 

  }
//actualiser
  refresh(): void {
    window.location.reload();
}
}