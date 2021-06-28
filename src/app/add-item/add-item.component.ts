import { Component, Input, OnInit, Output , EventEmitter, ViewChild, SimpleChanges} from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

import { BudgetItem } from '../budget-item.modal';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Input() item: BudgetItem= new BudgetItem('',null);
  @Output() formSubmit=new EventEmitter<BudgetItem>();
  @ViewChild('itemForm',{static:true}) frm:NgForm;


  @Input() new : boolean;




  constructor()
  {

   }

  ngOnInit(): void {

    // console.log(this.frm.value?.amount);
    // console.log(this.frm.value?.description);
    //   console.log(this.frm);
    // // this.frm.value.amount=this.amt;

    // // this.frm.value.description=this.desc;


    // this.setamt=this.amt;
    // this.setdesc=this.desc;





  }







  onSubmit(form: NgForm){

    this.formSubmit.emit(form.value);
    form.reset();

  }

}
