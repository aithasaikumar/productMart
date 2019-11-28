import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-washing-machines',
  templateUrl: './washing-machines.component.html',
  styleUrls: ['./washing-machines.component.css']
})
export class WashingMachinesComponent implements OnInit {

  washingMachinesData: Array<any> = [];
  washingMachinesFrom: FormGroup;
  rec_id = 0;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.washingMachinesFrom = this.formBuilder.group({
      name: [],
      description: [],
      category: [],
      price: [],
      quantity:[],
    })
  }


  onSubmit(){
    this.washingMachinesData.push(this.washingMachinesFrom.value);
    // console.log(this.washingMachinesData)
  }

  edit(id){
    this.rec_id = id;
    this.washingMachinesFrom = this.formBuilder.group({
      name: [this.washingMachinesData[id].name],
      description: [this.washingMachinesData[id].description],
      category: [this.washingMachinesData[id].category],
      price: [this.washingMachinesData[id].price],
      quantity:[this.washingMachinesData[id].quantity],
    })
  }

  update(){
    this.rec_id;
    this.washingMachinesData.splice(this.rec_id,1,this.washingMachinesFrom.value);
  }

  delete(id){
    this.washingMachinesData.splice(id,1);
  }

}
