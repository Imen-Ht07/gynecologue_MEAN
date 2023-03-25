import { Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Carnet } from 'src/app/_models/carnet';
import{CarnetService} from 'src/app/_services/carnet.service';
import {MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-add-carnet',
  templateUrl: './add-carnet.component.html',
  styleUrls: ['./add-carnet.component.css']
})
export class AddCarnetComponent  implements OnInit{
  photo: any = null; 
   carnet!:Carnet;
  carnetForm!:FormGroup;
//radiobox
  couvertureList= ["Oui","Non"];
sangList=["A","B","AB","O"];
rhesusList=["Positive","Negative"];
//checkbox
maladie = this._formBuilder.group({
  Diabéte: false,
  Cardiopathie: false,
  Insuffisance_rénale_chronique: false,
  Asthme: false,
  Anémie:false,
  Hépatite_C:false,
  Hépatite_B: false,
});
constructor (private C:CarnetService, 
                   private _formBuilder : FormBuilder,
                  private formBuilder : FormBuilder,
                  private dialogRef : MatDialogRef<AddCarnetComponent>) {
                                 
this.carnetForm = this.formBuilder.group({
  //femme
  photo:[''],
  nom: ['', Validators['required']],
  prenom:['', Validators['required']],
 adresse:[''],
 naissance:['', Validators['required']],
 nationalite:[''],
 Cin:['', Validators['required']],
 niv_inst:[''],
 occupation:[''],
 tel:['', Validators['required']],
 couv:[''],
 num_c:[''],
 sang:[''],
 rhesus:[''],
 type_allergie:[''],
 declaree_allergie:[''],
 traitement:[''], 
 med_tret:[''],
 age_pub:[''],
 prob:[''],
 maladie:[''],
 maladieF:[''],
 type_handicap:[''],
  declaree_handicap:[''],
  //vaccin
  date_vaccin1:[''],
  lieu_vaccin1:[''],
  date_vaccin2:[''],
  lieu_vaccin2:[''],
  date_vaccin3:[''],
  lieu_vaccin3:[''],
  date_vaccin4:[''],
  lieu_vaccin4:[''],
  date_vaccin5:[''],
  lieu_vaccin5:[''],
  date_rubeole:[''],
  lieu_rubeole:[''],
  autre_vaccin:[''],
 //medecin 
 nomM:[''],
 prenomM:[''],
 telM:[''],

})};
ngOnInit(): void{  }

loadImage(photo: any) {
  if (photo.target.files && photo.target.files[0]) {
    this.photo = photo.target.files[0];
    console.log(this.photo);
  } else {
    // Set a default picture if no photo was selected
    this.photo = 'src/assets/image/default.jpg';
  }
}

addCarnet(): any {
    const photo = this.photo || ''; // utilise une chaîne de caractères vide si photo est indéfini
    this.C.addCarnet(this.carnetForm.value, photo)
    .subscribe({
      next: (response) => {
        if (response.success) {
          alert("Les informations sont enregistrées avec succès");
          this.carnetForm.reset();
          this.dialogRef.close('save');
        } else {
          alert("Attention! Les informations ne sont pas enregistrées");
        }
      },
      error: (err) => {
        alert("Attention! Les informations ne sont pas enregistrées");
        console.error(err); // affiche l'erreur dans la console pour le débogage
      }
    });
}
  }
