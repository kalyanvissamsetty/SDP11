import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-laptopaccessories',
  templateUrl: './dialog-laptopaccessories.component.html',
  styleUrls: ['./dialog-laptopaccessories.component.css']
})
export class DialogLaptopaccessoriesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
