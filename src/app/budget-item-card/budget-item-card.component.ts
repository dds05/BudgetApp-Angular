import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

import { BudgetItem } from '../budget-item.modal';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {
  @Output() delete= new EventEmitter<any>();
  @Input() item: BudgetItem;

  @Output() cardClick=new EventEmitter<any>();
  @Output() edit=new EventEmitter<any>();
  @Output() idx=new EventEmitter<any>();

  amt:any;
  desc:any;
  constructor() { }

  ngOnInit(): void {

  }

  ondeleteButoon(){
    //emit an event
    this.delete.emit();
  }

  oncardClick(){
    this.cardClick.emit();
  }

  editItem(values){

    console.log('edit emitted');
    this.edit.emit(values);
  }

  sendIdx(item)
  {

    console.log(item);
    this.idx.emit(item);
  }
}
