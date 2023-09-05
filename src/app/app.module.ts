import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Child1Component } from './child1/child1.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { OneWayDatabindingComponent } from './one-way-databinding/one-way-databinding.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TdfComponent } from './tdf/tdf.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import {StructureDriven2Component} from "./structure-directive2/structure-driven2.component";
import { ForLoopTableComponent } from './for-loop-table/for-loop-table.component';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import {ProductFormComponent} from "./product-form/product-form.component";
import {ProductListComponent} from "./product-list/product-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Child1Component,
    PropertyBindingComponent,
    OneWayDatabindingComponent,
    TwoWayDatabindingComponent,
    TemplateDrivenFormComponent,
    TdfComponent,
    ModelDrivenFormComponent,
    StructureDirectiveComponent,
    StructureDriven2Component,
    ForLoopTableComponent,
    EmployeeEntryComponent,
    EmployeeViewComponent,
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
