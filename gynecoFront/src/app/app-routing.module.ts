import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { LoginComponent } from './_components/login/login.component';
import { ResponseResetComponent } from './_components/response-reset/response-reset.component';
import { RequestResetComponent } from './_components/request-reset/request-reset.component';
//carnet de santé 
import { CarnetComponent } from './_components/Carnet_sante/carnet/carnet.component';
import { AddCarnetComponent } from './_components/Carnet_sante/add-carnet/add-carnet.component';
import { UpdcarnetComponent } from './_components/Carnet_sante/updcarnet/updcarnet.component';
//home
import { HomeComponent } from './_components/home/home.component';
import { DocServiceComponent } from './_components/doc-service/doc-service.component';
import { BlogComponent } from './_components/blog/blog.component';
//doct
import { DashboardComponent } from './_components/_docteur/dashboard/dashboard.component';
import { ListPatientesComponent } from './_components/_docteur/list-patientes/list-patientes.component';
import { OrdonnanceComponent } from './_components/_docteur/ordonnance/ordonnance.component'; 
import { AddPatComponent } from './_components/_docteur/add-pat/add-pat.component';
import { AddMedicComponent } from './_components/_docteur/add-medic/add-medic.component';
import { ListMedicComponent } from './_components/_docteur/list-medic/list-medic.component';
//patiente
import { ChangePassComponent } from './_components/change-pass/change-pass.component';
const routes: Routes = [
   //{path:'', component: }
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'service', component: DocServiceComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'login', component: LoginComponent },
  { path: 'carnet', component: CarnetComponent ,  data: { roles: ['patiente', 'docteur'] } },
  { path: 'addcarnet', component: AddCarnetComponent , data: { roles: ['docteur']}},
  { path: 'updcarnet', component: UpdcarnetComponent , data: { roles: ['docteur']} },
  { path: 'admin/dashboard', component: DashboardComponent , data: { roles: ['docteur','secretaire']} },
  { path: 'admin/listP', component: ListPatientesComponent , data: { roles: ['docteur']}},
  { path: 'admin/ord', component: OrdonnanceComponent , data: { roles: ['docteur']}},
  {path: 'admin/patiente', component:AddPatComponent, data: { roles: ['docteur','secretaire']}},
  {path:'admin/addmedic', component:AddMedicComponent, data: { roles: ['docteur']}},
  {path:'admin/listM', component:ListMedicComponent , data: { roles: ['docteur']} },
  //psw
  {path:'request', component:RequestResetComponent },
  {path:'response/:resettoken', component:ResponseResetComponent},
  {path:'changepass/:id', component: ChangePassComponent , data: { roles: ['docteur','patiente']}},

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
