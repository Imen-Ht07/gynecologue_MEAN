import { Component,OnInit} from '@angular/core';
import { Carnet } from 'src/app/_models/carnet';
import{CarnetService} from 'src/app/_services/carnet.service';
//cornerstone
import * as cornerstone from 'cornerstone-core';
import * as dicomParser from 'dicom-parser';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit { 
  Carnet:any=[];
  carnet!: Carnet| undefined; 
  constructor( private C:CarnetService) {}
   //methode d'affichage de la liste
   listCarnet() {
    this.C.getCarnet().subscribe(
      (data) => {
        this.Carnet= data;
        console.log(data);
        // initialiser carnet avec la première entrée de la liste
        this.carnet = data[0];
      },
      (err:any) => {
        console.log(err);
      }
    );
  }
  

loadDicomImage(): void {
  // Charge l'image DICOM
const xhr = new XMLHttpRequest();
const imageId =  `http://localhost:8080/${this.Carnet.dicom}`
xhr.open('get', imageId , true);
xhr.responseType = 'arraybuffer';

xhr.onload = () => {
  const byteArray = new Uint8Array(xhr.response);
  dicomParser.parseDicom(byteArray);
  const canvas = document.getElementById('dicomCanvas') as HTMLCanvasElement;
  cornerstone.loadAndCacheImage(imageId).then((image) => {
    cornerstone.displayImage(canvas, image);
  });
}
xhr.send();
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
ngOnInit(): void {
  this.listCarnet();
}
 
}