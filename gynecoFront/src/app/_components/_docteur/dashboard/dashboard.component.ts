import { Component, OnInit } from '@angular/core';
import { SecretaireService } from 'src/app/_services/secretaire.service';
import { PatienteService } from 'src/app/_services/patiente.service';
import { UserService } from 'src/app/_services/user.service';
import { Patiente } from 'src/app/_models/patiente';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nbrP : any;
  patientes: Patiente[]=[];
  constructor(
    private PatienteService:PatienteService,
    private UserService:UserService  ){}
    user!:any;
    ngOnInit(): void {
      this.getNbP()
      document.querySelector("#content > div.topbar");
      this.user = this.UserService.getCurrentUser().user;
      }
    
      getNbP(){
        this.PatienteService.getNbP().subscribe((data)=>
        {this.nbrP =data, console.log("Nombre de patiente "+this.nbrP)});
      }
    
      async logOut() {
        if (confirm("Do you want to log out?")) {
          await this.UserService.logout()
        }
      }
}

