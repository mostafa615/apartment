import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  showSide:string = '';
  value:any=''
  activePerson:boolean=true
  addItem(value:any){
    this.showSide=value
  }
}
