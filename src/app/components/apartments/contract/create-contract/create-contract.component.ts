import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent {

  showSide:string = '';
  paramintab:any
  binary:boolean=true

  constructor(public _ActivatedRoute:ActivatedRoute){
    this.paramintab= _ActivatedRoute.snapshot.paramMap.get('id')
    this.paramintab=="create-tenant-contract"?this.paramintab="Create Tenant Contract":this.paramintab="Create Owner Contract"
   }
   
  addItem(value:any){
    this.showSide=value
  }
}
