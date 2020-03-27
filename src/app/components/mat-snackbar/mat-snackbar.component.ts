import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mat-snackbar',
  templateUrl: './mat-snackbar.component.html',
  styleUrls: ['./mat-snackbar.component.scss']
})
export class MatSnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar(message: string, action: string, ) {
    let snackRef = this.snackbar.open(message, action,{duration:2000});
    snackRef.afterDismissed().subscribe(data => {
      console.log('Dismissed snackbar');
    })

    snackRef.onAction().subscribe(data => {
      console.log('Action triger on snackbar');
    })
  }
}
