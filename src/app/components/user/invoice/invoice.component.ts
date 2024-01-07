import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  showSide: string = '';
  titlePage: string = '';

  constructor() { }

  ngOnInit() {
  }
  addItem(value: string) {
    this.showSide = value
  }
}
