import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medic} from '../_models/medic';

@Injectable({
  providedIn: 'root'
})
export class MedicService {

  drug:Medic[]=[];
  currentDrug: Medic[] | undefined;

  API_URI = 'http://localhost:8080/medic';
  constructor(private http:HttpClient ) {}
  //consulte
getDrug(searchTerm: string = ''): Observable<any> {
  const query = searchTerm ? `?drugName=${searchTerm}` : '';
  return this.http.get(`${this.API_URI}/listDrug`);
}
//view 
find(id: any): Observable<any> {
  return this.http.get(`${this.API_URI}/getDrug/${id}`);
}
  //ajout

addDrug(drug:Medic) :Observable<any>{
    return this.http.post<Medic>(`${this.API_URI}/saveDrug`, drug)
  }
 //supression
 deleteDrug(id:String) {
  return this.http.delete(`${this.API_URI}/deleteDrug/${id}`);
  }

//modifier
updateDrug(id: any, data: any): Observable<any> {

return this.http.put<Medic>(`${this.API_URI}/updateDrug/${id}`, data);
}
get(id: any): Observable<any> {
return this.http.get(`${this.API_URI}/drugByID/${id}`);
}
}