import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-men',
  templateUrl: './dialog-men.component.html',
  styleUrls: ['./dialog-men.component.css']
})
export class DialogMenComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
