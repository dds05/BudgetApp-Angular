import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from '../budget-item.modal';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.css']
})
export class EditItemModalComponent implements OnInit {



  constructor(@Inject(MAT_DIALOG_DATA) public item,public dialogref: MatDialogRef<EditItemModalComponent>) {

   }

  ngOnInit(): void {
    console.log(this.item);
  }

  onSubmit(updateditem: BudgetItem){
    console.log(updateditem);
    this.dialogref.close(updateditem);

  }

}
