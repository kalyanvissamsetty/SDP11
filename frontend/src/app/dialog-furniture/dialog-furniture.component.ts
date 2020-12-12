import { Component, OnInit , Inject} from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-furniture',
  templateUrl: './dialog-furniture.component.html',
  styleUrls: ['./dialog-furniture.component.css']
})
export class DialogFurnitureComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
