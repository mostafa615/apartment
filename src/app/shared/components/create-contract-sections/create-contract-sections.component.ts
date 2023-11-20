import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-contract-sections',
  templateUrl: './create-contract-sections.component.html',
  styleUrls: ['./create-contract-sections.component.scss']
})
export class CreateContractSectionsComponent {
@Input() ActionButtonField:boolean=true
@Input() index:number=0
@Input() contractDetails:any={}
RemoveActionButton() {
  this.ActionButtonField = false
}
}
