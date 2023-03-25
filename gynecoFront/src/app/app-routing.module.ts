import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
//carnet de santé 
import { CarnetComponent } from './_components/Carnet_sante/carnet/carnet.component';
import { AddCarnetComponent } from './_components/Carnet_sante/add-carnet/add-carnet.component';
import { UpdcarnetComponent } from './_components/Carnet_sante/updcarnet/updcarnet.component';
import { ViewCarnetComponent } from './_components/Carnet_sante/view-carnet/view-carnet.component';
//home
import { HomeComponent } from './_components/home/home.component';
import { DocServiceComponent } from './_components/doc-service/doc-service.component';
import { BlogComponent } from './_components/blog/blog.component';
//doct
import { DashboardComponent } from './_docteur/dashboard/dashboard.component';
import { ListPatientesComponent } from './_docteur/list-patientes/list-patientes.component';
import { OrdonnanceComponent } from './_docteur/ordonnance/ordonnance.component'; 
import { AddPatComponent } from './_components/add-pat/add-pat.component';
const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'home', component: HomeComponent},
  { path: 'service', component: DocServiceComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'login', component: LoginComponent },
  { path: 'carnet', component: CarnetComponent },
  { path: 'addcarnet', component: AddCarnetComponent },
  { path: 'updcarnet', component: UpdcarnetComponent },
  { path: 'viewcarnet', component: ViewCarnetComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/listP', component: ListPatientesComponent },
  { path: 'admin/ord', component: OrdonnanceComponent},
  {path: 'admin/patiente', component:AddPatComponent},
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
