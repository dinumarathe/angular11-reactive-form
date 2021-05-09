import { Component, OnInit } from '@angular/core';
import { Globals } from '../shared/common.globals';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  username: string = 'Dinesh';


  constructor(private globals: Globals) { }

  sendTextValue(name){
    this.globals.username.next(name.value)    
  }

  subjectSubscription(): void {
    this.globals.username.subscribe(res => {
      this.username = res;
      console.log(this.username);
      
    });
  }

  ngOnInit() { 
    this.subjectSubscription();
  }

}
