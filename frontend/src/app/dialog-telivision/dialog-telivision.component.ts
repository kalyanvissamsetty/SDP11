import { Component, OnInit , Inject} from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-telivision',
  templateUrl: './dialog-telivision.component.html',
  styleUrls: ['./dialog-telivision.component.css']
})
export class DialogTelivisionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
