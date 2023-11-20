import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent {
  showSide:string = '';
  paramintab:any
  constructor(public _ActivatedRoute:ActivatedRoute){
   this.paramintab= _ActivatedRoute.snapshot.paramMap.get('id')
   this.paramintab=="user-contract"?this.paramintab="User Contract":this.paramintab="Owner Contract"
  }
  addItem(value:any){
    this.showSide=value
  }
}
