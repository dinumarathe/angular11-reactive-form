import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  { path: 'reactive-form', component: ReactiveFormComponent},
  { path: 'custom-search', component: CustomSearchComponent},
  { path: 'subject', component: SubjectComponent},
  { path: '**', redirectTo: 'reactive-form', pathMatch: 'full' },
  { path: '', redirectTo: 'reactive-form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
