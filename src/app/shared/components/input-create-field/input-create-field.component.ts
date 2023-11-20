import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApartmentService } from 'src/app/_services/apartments/apartment.service';

@Component({
  selector: 'app-input-create-field',
  templateUrl: './input-create-field.component.html',
  styleUrls: ['./input-create-field.component.css']
})
export class InputCreateFieldComponent implements OnInit {

  @Input() show: boolean = true
  @Input() list: Array<any> = []
  @Input() labelinputs: any = {}
  @Input() textButton: string = ''
  @Output() transport = new EventEmitter<object>();
  @Output() inputField = new EventEmitter<object>();
  Createtransport: any
  text1: string = ''
  text2: string = ''
  content1: string = ''
  content2: string = ''
  apt_UUID: string = ''
  RemoveActionButton() {
    this.show = false
  }
  constructor(public _ApartmentService: ApartmentService) { }
  ngOnInit(): void {

  }
  saveActionButton() {
    this.list.push({ text1: this.labelinputs.text1, content1: this.content1, text2: this.labelinputs.text2, content2: this.content2 })
    this.show = false
    this.transport.emit({t_Name:this.content1,t_Distance:this.content2});
    this.inputField.emit({field_Name:this.content1,field_Content:this.content2});

    this.content1 = ''
    this.content2 = ''
  }

}
