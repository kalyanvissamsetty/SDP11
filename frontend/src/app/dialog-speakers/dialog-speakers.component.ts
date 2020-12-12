import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-speakers',
  templateUrl: './dialog-speakers.component.html',
  styleUrls: ['./dialog-speakers.component.css']
})
export class DialogSpeakersComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
