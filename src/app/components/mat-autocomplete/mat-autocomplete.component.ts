import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-mat-autocomplete',
  templateUrl: './mat-autocomplete.component.html',
  styleUrls: ['./mat-autocomplete.component.scss']
})
export class MatAutocompleteComponent implements OnInit {


  options: string[] = [
    'Angular', 'React', 'Vue'
  ];
  objects = [
    {name: 'Angular'},
    {name: 'Angular Material'},
    {name: 'Angular LazyLoad'},
    {name: 'Angular CoreModule'},
  ];

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit(): void {

    this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),
    map(value=>this._filter(value)))
  }
  display(object: any) {
    return object ? object.name : undefined;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLocaleLowerCase().includes(filterValue));
  }
}
