import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{AddCarnetComponent} from '../Carnet_sante/add-carnet/add-carnet.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private dialog :MatDialog) {}
  openDialog() {
    this.dialog.open(AddCarnetComponent, {
     width: '30%'

    });
  }
}
