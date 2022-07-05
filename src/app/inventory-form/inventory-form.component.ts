import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent implements OnInit {

  constructor() { }
    list = [
    ["Hammer", 25],
    ["Drill", 30],
    ["Screw Driver", 40]
  ];

  addItem(){
    console.log("working")
  }

  ngOnInit(): void {
  }

}
