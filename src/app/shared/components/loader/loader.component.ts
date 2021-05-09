import { Component, OnInit } from '@angular/core';
import { Globals } from '../../common.globals';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  name: string;
  constructor(private globals: Globals) {}
   ngOnInit() {
    
   }

}
