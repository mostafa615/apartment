import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mess-resquest',
  templateUrl: './mess-resquest.component.html',
  styleUrls: ['./mess-resquest.component.css']
})
export class MessResquestComponent implements OnInit {
  showSide:string = '';
  value:any=''
  activePerson:boolean=true
  constructor() { }

  ngOnInit() {
  }
  showEdit: Array<boolean> = [];
  addItem(value:any){
    this.showSide=value
  }

}
