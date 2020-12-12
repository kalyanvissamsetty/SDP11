import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-headphones',
  templateUrl: './dialog-headphones.component.html',
  styleUrls: ['./dialog-headphones.component.css']
})
export class DialogHeadphonesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
