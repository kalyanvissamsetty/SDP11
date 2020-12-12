import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-accessories',
  templateUrl: './dialog-accessories.component.html',
  styleUrls: ['./dialog-accessories.component.css']
})
export class DialogAccessoriesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
