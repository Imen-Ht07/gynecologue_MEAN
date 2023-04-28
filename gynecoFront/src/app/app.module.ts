import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
//angular/material

import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import{MatDialogModule } from '@angular/material/dialog';
// angular full calendar 

import { FullCalendarModule } from '@fullcalendar/angular';
//filter 
import { NgPipesModule } from 'ngx-pipes';
import { FilterPipeModule } from 'ngx-filter-pipe';
//import { Filter Pipe } from './filter.pipe';
//components
import { ResponseResetComponent } from './_components/response-reset/response-reset.component';
import { RequestResetComponent } from './_components/request-reset/request-reset.component';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { DocServiceComponent } from './_components/doc-service/doc-service.component';
import { BlogComponent } from './_components/blog/blog.component';
//docteur
import { DashboardComponent } from './_components/_docteur/dashboard/dashboard.component';
import { ListPatientesComponent } from './_components/_docteur/list-patientes/list-patientes.component';
import { OrdonnanceComponent } from './_components/_docteur/ordonnance/ordonnance.component'; 
import { AddPatComponent } from './_components/_docteur/add-pat/add-pat.component';
import { AddCarnetComponent } from './_components/Carnet_sante/add-carnet/add-carnet.component';
import { UpdcarnetComponent } from './_components/Carnet_sante/updcarnet/updcarnet.component';
//patiente 
import { CarnetComponent } from './_components/Carnet_sante/carnet/carnet.component';
import { ViewCarnetComponent } from './_components/Carnet_sante/view-carnet/view-carnet.component';
import { ChangePassComponent } from './_components/change-pass/change-pass.component';
import { AddMedicComponent } from './_components/_docteur/add-medic/add-medic.component';
import { ListMedicComponent } from './_components/_docteur/list-medic/list-medic.component';



const materialModules = [
  CdkTreeModule,
  MatNativeDateModule,
  MatDialogModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatTreeModule,
  OverlayModule,
  PortalModule,
  MatBadgeModule,
  MatGridListModule,
  MatRadioModule,
  MatDatepickerModule,
  MatTooltipModule
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CarnetComponent,
    AddCarnetComponent,
    UpdcarnetComponent,
    ViewCarnetComponent,
    DashboardComponent,
    ListPatientesComponent,
    DocServiceComponent,
    BlogComponent,
    OrdonnanceComponent,
    AddPatComponent,
    ResponseResetComponent,
    RequestResetComponent,
    ChangePassComponent,
    AddMedicComponent,
    ListMedicComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    materialModules,
    FullCalendarModule,
    RouterModule, 
    NgPipesModule,
    FilterPipeModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
