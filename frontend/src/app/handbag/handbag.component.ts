import { Component, OnInit, Inject} from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-handbag',
  templateUrl: './handbag.component.html',
  styleUrls: ['./handbag.component.css']
})
export class HandbagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
