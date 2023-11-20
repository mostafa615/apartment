import { Component ,EventEmitter,Output,Input} from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {
  value:string='';
  show:string="false";
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() titleModule = '';
  showSidebar(): void{
    this.show == "false" ? this.show ="true" : this.show ="false";
    this.newItemEvent.emit(this.show);
  }
}
