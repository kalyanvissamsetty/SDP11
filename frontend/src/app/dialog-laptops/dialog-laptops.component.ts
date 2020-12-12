import { Component, OnInit , Inject} from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-laptops',
  templateUrl: './dialog-laptops.component.html',
  styleUrls: ['./dialog-laptops.component.css']
})
export class DialogLaptopsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
