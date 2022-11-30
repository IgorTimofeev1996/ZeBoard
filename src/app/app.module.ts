import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormControlName, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalCreateColumnComponent } from './modals/modal-create-column/modal-create-column.component';
import { ModalCreateTaskComponent } from './modals/modal-create-task/modal-create-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldControl, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ModalCreateColumnComponent,
    ModalCreateTaskComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

