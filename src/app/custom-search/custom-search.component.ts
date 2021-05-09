import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css']
})
export class CustomSearchComponent implements OnInit {

  listData: any[];
  searchText: string;
  list: any[] = [
    { first: "Dinesh", id: "id", last: "Marathe" },
    { first: "Ganesh", id: "id", last: "Marathe" },
    { first: "Ramesh", id: "id", last: "Marathe" },
    { first: "Suresh", id: "id", last: "Marathe" },
    { first: "Takesh", id: "id", last: "Marathe" },
    { first: "Rakesh", id: "id", last: "Marathe" },
    { first: "Lokesh", id: "id", last: "Marathe" },
    { first: "Paresh", id: "id", last: "Marathe" },
    { first: "Dinesh", id: "id", last: "Marathe" },
    { first: "Ganesh", id: "id", last: "Marathe" },
    { first: "Ramesh", id: "id", last: "Marathe" },
    { first: "Suresh", id: "id", last: "Marathe" },
    { first: "Takesh", id: "id", last: "Marathe" },
    { first: "Rakesh", id: "id", last: "Marathe" },
    { first: "Lokesh", id: "id", last: "Marathe" },
    { first: "Paresh", id: "id", last: "Marathe" },
    { first: "Dinesh", id: "id", last: "Marathe" },
    { first: "Ganesh", id: "id", last: "Marathe" },
    { first: "Ramesh", id: "id", last: "Marathe" },
    { first: "Suresh", id: "id", last: "Marathe" },
    { first: "Takesh", id: "id", last: "Marathe" },
    { first: "Rakesh", id: "id", last: "Marathe" },
    { first: "Lokesh", id: "id", last: "Marathe" },
    { first: "Paresh", id: "id", last: "Marathe" },
    { first: "Dinesh", id: "id", last: "Marathe" },
    { first: "Ganesh", id: "id", last: "Marathe" },
    { first: "Ramesh", id: "id", last: "Marathe" },
    { first: "Suresh", id: "id", last: "Marathe" },
    { first: "Takesh", id: "id", last: "Marathe" },
    { first: "Rakesh", id: "id", last: "Marathe" },
    { first: "Lokesh", id: "id", last: "Marathe" },
    { first: "Paresh", id: "id", last: "Marathe" },
    { first: "Dinesh", id: "id", last: "Marathe" },
    { first: "Ganesh", id: "id", last: "Marathe" },
    { first: "Ramesh", id: "id", last: "Marathe" },
    { first: "Suresh", id: "id", last: "Marathe" },
    { first: "Takesh", id: "id", last: "Marathe" },
    { first: "Rakesh", id: "id", last: "Marathe" },
    { first: "Lokesh", id: "id", last: "Marathe" },
    { first: "Paresh", id: "id", last: "Marathe" },
    { first: "Dinesh", id: "id", last: "Marathe" },
    { first: "Ganesh", id: "id", last: "Marathe" },
    { first: "Ramesh", id: "id", last: "Marathe" },
    { first: "Suresh", id: "id", last: "Marathe" },
    { first: "Takesh", id: "id", last: "Marathe" },
    { first: "Rakesh", id: "id", last: "Marathe" },
    { first: "Lokesh", id: "id", last: "Marathe" },
    { first: "Paresh", id: "id", last: "Marathe" }
  ];
  selectedFirst: any;
  selectedLast: any;

  constructor() { }

  onSelect(item) {
    console.log(item);
    this.selectedFirst = item.first;
    this.selectedLast = item.last;
  }

  removeItem(item) {
    // item.remove();
    this.selectedFirst = [];
    this.selectedLast = []; 
  }
  searchList(event?) {
    console.log(this.listData);
    if ((this.searchText === '' || this.searchText === undefined)) {
      return this.listData = [...this.list];
    } else {
      return this.listData = this.listData.filter(elem =>
        elem.first.toLowerCase().match(this.searchText)
      );
      console.log(this.listData);
    }
  }
  ngOnInit() {
    this.searchList();
  }

}
