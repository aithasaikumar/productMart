import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {
  tabletData: Array<any> = [];
  tabletForm: FormGroup;
  rec_id = 0;
 
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.tabletForm = this.formBuilder.group({
      name: [],
      description: [],
      category: [],
      price: [],
      quantity:[],
    })
  }


  onSubmit(){
    this.tabletData.push(this.tabletForm.value);
    console.log(this.tabletData)
  }

  edit(id){
    this.rec_id = id;
    this.tabletForm = this.formBuilder.group({
      name: [this.tabletData[id].name],
      description: [this.tabletData[id].description],
      category: [this.tabletData[id].category],
      price: [this.tabletData[id].price],
      quantity:[this.tabletData[id].quantity],
    })
  }

  update(){
    this.rec_id;
    this.tabletData.splice(this.rec_id,1,this.tabletForm.value);

  }

  delete(id){
    this.tabletData.splice(id,1);
  }
}
