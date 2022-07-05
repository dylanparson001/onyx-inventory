import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  @Input() list: any;
  constructor() { }
  ngOnInit(): void {
  }

}
