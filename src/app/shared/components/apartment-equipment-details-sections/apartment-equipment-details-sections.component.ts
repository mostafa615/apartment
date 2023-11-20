import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-apartment-equipment-details-sections',
  templateUrl: './apartment-equipment-details-sections.component.html',
  styleUrls: ['./apartment-equipment-details-sections.component.scss']
})
export class ApartmentEquipmentDetailsSectionsComponent {
@Input() FieldData:Array<number>=[]
@Input() label:string=''
@Input() textbutton:string=''
@Input() ActionButtonField:boolean=false
@Output() saveActionButtonFieldEmit = new EventEmitter<string>();

RemoveActionButtonFieldSection(){
  this.ActionButtonField=false
}

saveActionButtonFieldSection(value:any){
  this.saveActionButtonFieldEmit.emit(value)
  this.ActionButtonField=false
}
}
