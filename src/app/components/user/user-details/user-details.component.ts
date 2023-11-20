import { Component ,ViewEncapsulation } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  showSide:string = '';
  value:any='';
  link: Array<boolean> = [true];
  listAnchors:any=[
    {id:'Generalinfo',link:'General info'},
    {id:'OtherDetails',link:'Other Details'},
  ]
  
  constructor(private viewportScroller: ViewportScroller) {}
 
  addItem(value:any){
    this.showSide=value
  }
  changeAnchor(index: number): void {
    this.link=this.link.map(el=> el==true ? false : false)
    this.link[index] = true
  }
  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);}  
}
