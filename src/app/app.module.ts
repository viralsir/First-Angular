import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Child1Component } from './child1/child1.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { OneWayDatabindingComponent } from './one-way-databinding/one-way-databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Child1Component,
    PropertyBindingComponent,
    OneWayDatabindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
