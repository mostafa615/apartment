import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-status-new-field-apartment',
  templateUrl: './status-new-field-apartment.component.html',
  styleUrls: ['./status-new-field-apartment.component.scss']
})
export class StatusNewFieldApartmentComponent {

  @Output() RemoveActionButtonField=new EventEmitter<string>();
  @Output() saveActionButtonField=new EventEmitter<string>();

  RemoveActionButton():void{this.RemoveActionButtonField.emit('')}
  saveActionButton():void{this.saveActionButtonField.emit('')}
}
