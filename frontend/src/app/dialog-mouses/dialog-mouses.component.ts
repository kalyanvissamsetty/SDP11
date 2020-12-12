import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-mouses',
  templateUrl: './dialog-mouses.component.html',
  styleUrls: ['./dialog-mouses.component.css']
})
export class DialogMousesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
