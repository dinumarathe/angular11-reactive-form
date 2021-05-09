import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './shared/material.module';
import { RequestService } from './request.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { SubjectComponent } from './subject/subject.component';
import { Globals } from './shared/common.globals';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    CustomSearchComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [RequestService, Globals],
  // entryComponents: [LoaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
