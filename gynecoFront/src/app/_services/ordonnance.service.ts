import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordonnance} from 'src/app/_models/ordonnance';
@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {
  ord:Ordonnance[]=[];
  currentOrd: Ordonnance[] | undefined;

  API_URI = 'http://localhost:8080/ord';
  constructor(private http:HttpClient ) {}
  //consulte  
getOrd(searchTerm: string = ''): Observable<any> {
  const query = searchTerm ? `?drugName=${searchTerm}` : '';
  return this.http.get(`${this.API_URI}/listOrd${query}`);
}
//view 
findOrd(id: any): Observable<any> {
  return this.http.get(`${this.API_URI}/getOrd/${id}`);
}
  //ajout

addOrd(ord:Ordonnance) :Observable<any>{
    return this.http.post<Ordonnance>(`${this.API_URI}/saveord`, ord)
  }

 //supression
 deleteOrd(id:String) {
  return this.http.delete(`${this.API_URI}/deleteOrd/${id}`);
  }

//modifier
updateOrd(id: any, data: any): Observable<any> {

return this.http.put<Ordonnance>(`${this.API_URI}/updateOrd/${id}`, data);
}
get(id: any): Observable<any> {
return this.http.get(`${this.API_URI}/ordByID/${id}`);
}

}
