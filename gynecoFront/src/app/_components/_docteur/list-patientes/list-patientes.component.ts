import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import { PatienteService } from 'src/app/_services/patiente.service';
import { Patiente } from 'src/app/_models/patiente';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-list-patientes',
  templateUrl: './list-patientes.component.html',
  styleUrls: ['./list-patientes.component.css']
})
export class ListPatientesComponent implements OnInit {
  textsearch:any;
  patientes: Patiente[]=[];
  dataSource = new MatTableDataSource<Patiente>(this.patientes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor( private patienteService:PatienteService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.patienteService.getP().subscribe((data) =>
    {
      this.patientes = data
      console.log(data);
    } )

  }
  async logOut() {
    if (confirm("Do you want to log out?")) {
      await this.patienteService.logoutUser()
    }
  }
  
  deletepatiente(patienteClicked: Patiente) {
    if(window.confirm('Do you want to go ahead?')) {

    this.patienteService.deleteP(patienteClicked._id)
      .subscribe(
        () => {
          this.patientes = this.patientes.filter(tL => tL._id != patienteClicked._id);
        }
      );}
  }
}