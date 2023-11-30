import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.css']
})
export class WorkerProfileComponent implements OnInit {
  showSide: string = '';

  constructor() { }

  ngOnInit() {
  }
  /**
   * addItem
   * @param value
   */
  addItem(value: any) {
    this.showSide = value;
  }

  /**
   * scrollTop
   * to make screen scroll to top
   * @return void
   */
  scrollTop(): void {
    window.scrollTo(0, 0);
  }

}
