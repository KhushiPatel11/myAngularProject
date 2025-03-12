import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListTdbComponent } from './product-list-tdb/product-list-tdb.component';
import { FormsModule } from '@angular/forms';
import { AllProductComponent } from './all-product/all-product.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListTdbComponent,
    AllProductComponent,
    TemplateDrivenFormComponent,
    FormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
