import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../budget-item.modal';
import { UpdateEvent } from '../item-list/item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  localList:string
  totalBudget:number=0;
  budgetItems: BudgetItem[]=[];
  constructor(

  ) {
    this.localList=localStorage.getItem('list');
    if(this.localList!=null)
    {
      this.budgetItems=JSON.parse(this.localList);
      for(let i=0;i<this.budgetItems.length;i++)
      {
        this.totalBudget+=this.budgetItems[i].amount;
      }
    }


   }

  currentidx: number;
  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem)
  {
    this.budgetItems.push(newItem);
    this.totalBudget+=newItem.amount;
    localStorage.setItem("list",JSON.stringify(this.budgetItems));
  }

  deleteItem(item: BudgetItem)
  {
    let idx=this.budgetItems.indexOf(item);
    this.budgetItems.splice(idx,1);
    this.totalBudget-=item.amount;

    localStorage.setItem("list",JSON.stringify(this.budgetItems));
  }

  editItem(values)
  {

    let idx=this.currentidx;
    console.log(idx);
    console.log(values);
    this.budgetItems[idx]=values;
    // this.budgetItems[this.budgetItems.indexOf(values)]=values;

    localStorage.setItem("list",JSON.stringify(this.budgetItems));
  }

  updateItem(updateEvent: UpdateEvent){
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)]=updateEvent.new;


    this.totalBudget-=updateEvent.old.amount;
    this.totalBudget+=updateEvent.new.amount;


    localStorage.setItem("list",JSON.stringify(this.budgetItems));

  }

  getIdx(idx)
  {
    this.currentidx=this.budgetItems.indexOf(idx);
  }


}
