import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-tabs',
  templateUrl: './mat-tabs.component.html',
  styleUrls: ['./mat-tabs.component.scss']
})
export class MatTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logChange(data: any) {
    console.log('The selected tab is:', data);
  }

}
