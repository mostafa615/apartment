import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'custom-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements  OnChanges  {
  /**spinner */
  spinner: boolean = true;
  /** dataLoaded */
  @Input() dataLoaded: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    
      // Trigger the product has been loaded
      if (this.dataLoaded == true) {
        this.spinner = false;
      }
  }
  
}
