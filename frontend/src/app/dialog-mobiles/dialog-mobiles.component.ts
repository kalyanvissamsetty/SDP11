import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-mobiles',
  templateUrl: './dialog-mobiles.component.html',
  styleUrls: ['./dialog-mobiles.component.css']
})
export class DialogMobilesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
