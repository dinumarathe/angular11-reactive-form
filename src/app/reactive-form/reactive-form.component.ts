import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;
  countryList: any[] = [
    {countryName: 'India'},
    { countryName: 'UK'},
    { countryName: 'USA'},
    { countryName: 'New Zealand'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private request: RequestService
    ) { }

  private createReactiveForm(): void {
    this.reactiveForm = this.formBuilder.group({
      country: ['', Validators.required],
      checkboxValue: [false, Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required],
      datepicker: ['', Validators.required],
      toggleBtn: ['', Validators.required]
    })
  }

 

  changeCountry(event): void {
    console.log(event.value);
    
  }



  onSubmit() {
    console.log(this.reactiveForm);
    const payload = { 
      country: this.reactiveForm.value.country,
      checkboxValue: this.reactiveForm.value.checkboxValue,
      datepicker: this.reactiveForm.value.datepicker,
      description: this.reactiveForm.value.description,
      email: this.reactiveForm.value.email,
      toggleBtn: this.reactiveForm.value.toggleBtn,
      
     }
    this.request.createReactiveForm(payload).subscribe(response => {
      console.log(response);
    });    
  }

  ngOnInit() {
    this.createReactiveForm()
  }

}
