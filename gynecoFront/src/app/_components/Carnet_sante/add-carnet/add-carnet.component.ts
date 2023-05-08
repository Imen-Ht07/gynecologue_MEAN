import { Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Carnet } from 'src/app/_models/carnet';
import{CarnetService} from 'src/app/_services/carnet.service';
@Component({
  selector: 'app-add-carnet',
  templateUrl: './add-carnet.component.html',
  styleUrls: ['./add-carnet.component.css']
})
export class AddCarnetComponent  implements OnInit{
  dicom: any = null; 
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
                  private formBuilder : FormBuilder) {
//
                                          
this.carnetForm = this.formBuilder.group({
  //femme
  dicom:[''],
  nom: ['', Validators['required']],
  prenom:['', Validators['required']],
 adresse:[''],
 naissance:[''],
 nationalite:[''],
 Cin:[''],
 niv_inst:[''],
 occupation:[''],
 tel:[''],
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
ngOnInit(): void{

  }
  
  onFileSelected(dicom: any) {
    if (dicom.target.files && dicom.target.files[0]) {
      this.dicom = dicom.target.files[0];
      console.log(this.dicom);
  };
  }
addCarnet(): any {
  console.log('Valeur du formulaire : ', this.carnetForm.value);
  console.log('Valeur du fichier DICOM : ', this.dicom);
  this.C.addCarnet(this.carnetForm.value, this.dicom)
  .subscribe({
  next: (response) => {
  console.log('Réponse du serveur : ', response);
  if (response.ok) {
  alert("Les informations ont été enregistrées avec succès");
  } else {
  alert("Une erreur est survenue lors de l'enregistrement des informations.");
  }
  },
  error: (err) => {
  alert("Une erreur est survenue lors de l'enregistrement des informations.");
  }
  });
  }
  
}























