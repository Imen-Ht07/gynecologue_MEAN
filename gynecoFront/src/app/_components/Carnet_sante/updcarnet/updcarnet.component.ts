import { Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Carnet } from 'src/app/_models/carnet';
import{CarnetService} from 'src/app/_services/carnet.service';

@Component({
  selector: 'app-updcarnet',
  templateUrl: './updcarnet.component.html',
  styleUrls: ['./updcarnet.component.css']
})
export class UpdcarnetComponent implements OnInit  {
  carnets:Carnet[]=[]; 
  photo: any = null;
  id!:String
constructor(   private router : Router, private route: ActivatedRoute,private C:CarnetService, ){}
carnetForm: Carnet = {
  _id:'',
  //femme
  photo:'',
  nom: '',
  prenom:'',
 adresse:'',
 naissance:new Date(),
 nationalite:'',
 Cin:0,
 niv_inst:'',
 occupation:'',
 tel:0,
 couv:'',
 num_c:0,
 sang:'',
 rhesus:'',
 type_allergie:'',
 declaree_allergie:new Date(),
 traitement:'', 
 med_tret:'',
 age_pub:0,
 prob:'',
 maladie:'',
 maladieF:'',
 type_handicap:'',
  declaree_handicap:'',
  //vaccin
  date_vaccin1:new Date(),
  lieu_vaccin1:'',
  date_vaccin2:new Date(),
  lieu_vaccin2:'',
  date_vaccin3:new Date(),
  lieu_vaccin3:'',
  date_vaccin4:new Date(),
  lieu_vaccin4:'',
  date_vaccin5:new Date(),
  lieu_vaccin5:'',
  date_rubeole:new Date(),
  lieu_rubeole:'',
  autre_vaccin:'',
 //medecin 
 nomM:'',
 prenomM:'',
 telM:0,

}; 
message= 'les informations sont modifiées ';

loadImage(photo: any) {
  this.photo = photo.target.files[0];
  console.log(this.photo);
}
getCarnetByID(id:any): void {
  this.C.get(id)
    .subscribe(
      data => {
        this.carnetForm = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

updateCarnet(): void {
  this.C.updateCarnet(this.carnetForm._id, this.carnetForm)
    .subscribe(
      response => {
        console.log(response);
        this.message = response.message;
      },
      error => {
        console.log(error);
      });
}

ngOnInit(): void {
  this.message = '';
  this.id = this.route.snapshot.params['id'];
  this.getCarnetByID(this.id);
}
}