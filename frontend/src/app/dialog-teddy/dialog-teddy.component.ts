import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-teddy',
  templateUrl: './dialog-teddy.component.html',
  styleUrls: ['./dialog-teddy.component.css']
})
export class DialogTeddyComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
