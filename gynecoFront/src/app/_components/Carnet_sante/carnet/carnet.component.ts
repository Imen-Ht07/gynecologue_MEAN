import { Component, OnInit } from '@angular/core';
import { Carnet } from 'src/app/_models/carnet';
import { CarnetService } from 'src/app/_services/carnet.service';
import * as cornerstone from 'cornerstone-core';
import * as dicomParser from 'dicom-parser';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

// Configure cornerstone
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {
  carnet: Carnet | undefined;
  carnetList: Carnet[] = [];
  imageLoaded: boolean = false;

  constructor(
    private carnetService: CarnetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listCarnet();
  }

  listCarnet(): void {
    this.carnetService.getCarnet()
      .pipe(
        catchError(err => {
          console.log(err);
          return of([]);
        })
      )
      .subscribe((data: Carnet[]) => {
        this.carnetList = data;
        this.carnet = data[0];
      });
  }

  loadDicomImage(): void {
    this.imageLoaded = false;
    const imageId = `wadouri:http://localhost:8080/${this.carnet?.dicom}`;
    cornerstoneWADOImageLoader.configure({
      useWebWorkers: false,
      decodeConfig: {
        usePDFJS: false,
      },
      webWorkerPath: 'src/assets/cornerstone/webworkers/cornerstoneWADOImageLoaderWebWorker.js',
      taskConfiguration: {
        decodeTask: {
          initializeCodecsOnStartup: true,
          usePDFJS: false,
          codecsPath: 'src/assets/cornerstone/codecs/cornerstoneWADOImageLoaderCodecs.js',
          strict: false,
        },
      },
    });
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
    cornerstone.loadAndCacheImage(imageId)
      .then((image) => {
        const element = document.getElementById('dicomCanvas') as HTMLCanvasElement;
        cornerstone.displayImage(element, image);
        this.imageLoaded = true;
      })
      .catch((error) => {
        console.log(error);
        this.imageLoaded = true;
      });
  }

  deleteCarnet(_id: string): void {
    this.carnetService.deleteCarnet(_id)
      .subscribe(() => {
        alert('Toutes les informations ont été supprimées');
        this.router.navigate(['/']);
      });
  }

  refresh(): void {
    window.location.reload();
  }
}
