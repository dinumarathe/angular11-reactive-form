import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { RequestService } from './request.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomSearchComponent } from './custom-search/custom-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    CustomSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
