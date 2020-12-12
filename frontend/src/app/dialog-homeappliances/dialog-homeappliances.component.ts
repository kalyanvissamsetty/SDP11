import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-homeappliances',
  templateUrl: './dialog-homeappliances.component.html',
  styleUrls: ['./dialog-homeappliances.component.css']
})
export class DialogHomeappliancesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
