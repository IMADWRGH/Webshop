import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductHeaderComponent } from './pages/home/Component/product-header/product-header.component';
import { FiltersComponent } from './pages/home/Component/filters/filters.component';
import { ProductBoxComponent } from './pages/home/Component/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './services/cart.service'

import { MaterialDesignModule } from './material-design.module';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    HttpClientModule

  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
