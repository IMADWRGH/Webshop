import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatSidenavModule} from '@angular/material/sidenav';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import  { MatGridListModule} from '@angular/material/grid-list';
import  {  MatMenuModule} from '@angular/material/menu';
import  {  MatButtonModule} from '@angular/material/button';
import  {  MatCardModule} from '@angular/material/card';
import  {  MatIconModule} from '@angular/material/icon';
import  {  MatExpansionModule} from '@angular/material/expansion';
import  {  MatListModule} from '@angular/material/list';
import  {  MatToolbarModule} from '@angular/material/toolbar';
import  {  MatTableModule} from '@angular/material/table';
import  {  MatBadgeModule} from '@angular/material/badge';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductHeaderComponent } from './pages/home/Component/product-header/product-header.component';
import { FiltersComponent } from './pages/home/Component/filters/filters.component';
import { ProductBoxComponent } from './pages/home/Component/product-box/product-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductHeaderComponent,
    FiltersComponent,
    ProductBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
