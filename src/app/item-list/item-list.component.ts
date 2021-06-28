import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { BudgetItem } from '../budget-item.modal';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})







export class ItemListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() budgetItems: BudgetItem[]=[];
  @Output() delete=new EventEmitter<BudgetItem>();
  @Output() edit=new EventEmitter<any>();
  @Output() idx=new EventEmitter<any>();
  @Output() update=new EventEmitter<UpdateEvent>();
  ngOnInit(): void {
  }

  ondeleteitem(item:BudgetItem){
    this.delete.emit(item);


  }

  editItem(values)
  {

    // console.log('reached', item);
    // console.log(values);
      this.edit.emit(values);

  }

  sendIdx(item)
  {
    this.idx.emit(item);

  }


  oncardClicked(item: BudgetItem){
    //display edit modal
    console.log('cardclicked',item);
    const dialogRef=this.dialog.open(EditItemModalComponent,
      {
        width: '580px',
        data: item
      });

      dialogRef.afterClosed().subscribe(result=>{
        if(result){
          //replace/ update item
          // this.budgetItems[this.budgetItems.indexOf(item)]=result;

          this.update.emit({
            old: item,
            new: result,
          })
        }
      })


  }


}
export  interface UpdateEvent{
  old:BudgetItem;
  new:BudgetItem;
}
