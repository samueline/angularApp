// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
// import {  ProductComponent } from './product/product.component';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { CartComponent } from './cart/cart.component';
// import { ProductsComponent } from './products/products.component';
// import { ContactComponent } from './contact/contact.component';
// import { DemoComponent } from './demo/demo.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from './shared/shared.module'
import {CoreModule} from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import  { AngularFireModule } from '@angular/fire';
import  { AngularFireAuthModule } from '@angular/fire/auth';
import  { AngularFireStorageModule } from '@angular/fire/storage';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LayoutComponent } from './layout/layout.component';

// import { SharedModule } from './shared/shared.module';
// import { CoreModule } from './core/core.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {environment}from './../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
   
    LayoutComponent
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
