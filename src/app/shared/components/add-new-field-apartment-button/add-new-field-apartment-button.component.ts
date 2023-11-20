import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-field-apartment-button',
  templateUrl: './add-new-field-apartment-button.component.html',
  styleUrls: ['./add-new-field-apartment-button.component.scss']
})
export class AddNewFieldApartmentButtonComponent {
  @Input() text:string=''
  @Output() ActionButton = new EventEmitter<string>();
  
  
  action(value:any):void{
  this.ActionButton.emit(value)
  }
}
