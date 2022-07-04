import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  constructor() { }
  list = [
    ["Hammer", 25],
    ["Drill", 30],
    ["Screw Driver", 40]
  ];
  ngOnInit(): void {
  }

}
