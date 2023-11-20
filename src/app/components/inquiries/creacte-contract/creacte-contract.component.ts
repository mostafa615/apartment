import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacte-contract',
  templateUrl: './creacte-contract.component.html',
  styleUrls: ['./creacte-contract.component.css']
})
export class CreacteContractComponent implements OnInit {

  constructor() { }
  date: Date =new Date();

  ngOnInit() {
  }
  showSide: string = '';

  addItem(value: string): void {
    this.showSide = value
  }
}
