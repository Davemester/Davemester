import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-datepicker',
  templateUrl: './mat-datepicker.component.html',
  styleUrls: ['./mat-datepicker.component.scss']
})
export class MatDatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dateFilter(date: Date) {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
}
