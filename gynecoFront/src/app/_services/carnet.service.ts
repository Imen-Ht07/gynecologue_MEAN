import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carnet} from '../_models/carnet';
@Injectable({
  providedIn: 'root'
})
export class CarnetService {
  
  carnet:Carnet[]=[];
  currentCarnet: Carnet[] | undefined;

  API_URI = 'http://localhost:8080/carnet';
  constructor(private http:HttpClient ) {}
  //consulte
getCarnet(): Observable<any> {
  return this.http.get(`${this.API_URI}/list`);
}
//view 
find(id: any): Observable<any> {
  return this.http.get(`${this.API_URI}/getcarnetByID/${id}`);
}
  //ajout

addCarnet(newCarnet:any, dicom: File): Observable<any> {
  const fd = new FormData();
  if(dicom){
      fd.append('dicom', dicom, dicom.name);
      console.log("Uploading selected DICOM file...");
    }else{
      console.log("No DICOM file selected.");
    }
    fd.append('nom',newCarnet.nom);
     fd.append('prenom',newCarnet.prenom);
     fd.append('adresse',newCarnet.adresse);
     fd.append('naissance',newCarnet.naissance);
     fd.append('nationalite',newCarnet.nationalite);
     fd.append('Cin',newCarnet.Cin);
     fd.append('niv_inst',newCarnet.niv_inst);
     fd.append('occupation',newCarnet.occupation);
     fd.append('tel',newCarnet.tel);
     fd.append('couv',newCarnet.couv);
     fd.append('num_c',newCarnet.num_c);
     fd.append('sang',newCarnet.sang);
     fd.append('rhesus',newCarnet.rhesus);
     fd.append('type_allergie',newCarnet.type_allergie);
     fd.append('declaree_allergie',newCarnet.declaree_allergie);
     fd.append('traitement',newCarnet.traitement);
     fd.append('med_tret',newCarnet.med_tret);
     fd.append('age_pub',newCarnet.age_pub);
     fd.append('prob',newCarnet.prob);
     fd.append('maladie',newCarnet.maladie);
     fd.append('maladieF',newCarnet.maladieF);
     fd.append('type_handicap',newCarnet.type_handicap);
      fd.append('declaree_handicap',newCarnet.declaree_handicap);
     //vaccin
      fd.append('date_vaccin1',newCarnet.date_vaccin1);
      fd.append('lieu_vaccin1',newCarnet.lieu_vaccin1);
      fd.append('date_vaccin2',newCarnet.date_vaccin2);
      fd.append('lieu_vaccin2',newCarnet.lieu_vaccin2);
      fd.append('date_vaccin3',newCarnet.date_vaccin3);
      fd.append('lieu_vaccin3',newCarnet.lieu_vaccin3);
      fd.append('date_vaccin4',newCarnet.date_vaccin4);
      fd.append('lieu_vaccin4',newCarnet.lieu_vaccin4);
      fd.append('date_vaccin5',newCarnet.date_vaccin5);
      fd.append('lieu_vaccin5',newCarnet.lieu_vaccin5);
      fd.append('date_rubeole',newCarnet.date_rubeole);
      fd.append('lieu_rubeole',newCarnet.lieu_rubeole);
      fd.append('autre_vaccin',newCarnet.autre_vaccin);
    //medecin 
     fd.append('nomM',newCarnet.nomM);
     fd.append('prenomM',newCarnet.prenomM);
     fd.append('telM',newCarnet.telM);
   
  return this.http.post<Carnet>(`${this.API_URI}/save`, fd);
}
  //supression
    deleteCarnet(id:String) {
      return this.http.delete(`${this.API_URI}/delete/${id}`);
      }

//modifier
updateCarnet(id: any, data: any): Observable<any> {
    
  return this.http.put<Carnet>(`${this.API_URI}/update/${id}`, data);
}
get(id: any): Observable<any> {
  return this.http.get(`${this.API_URI}/carnetByID/${id}`);
}
}