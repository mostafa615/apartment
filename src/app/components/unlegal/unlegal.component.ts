import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unlegal',
  templateUrl: './unlegal.component.html',
  styleUrls: ['./unlegal.component.css']
})
export class UnlegalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showEdit: Array<boolean> = [];
  showSide: string = '';

  addItem(value: string): void {
    this.showSide = value
  }

}
