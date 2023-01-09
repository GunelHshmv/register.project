import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RegisterComponent } from './register/register.component';
import { AddDataComponent } from './register/add-data/add-data.component';
import { TabledataComponent } from './register/tabledata/tabledata.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AddDataComponent,
    TabledataComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }