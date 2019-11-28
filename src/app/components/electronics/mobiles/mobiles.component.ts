import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobileData: Array<any> = [];
  mobileForm: FormGroup;
  rec_id = 0;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.mobileForm = this.formBuilder.group({
      name: [],
      description: [],
      category: [],
      price: [],
      quantity:[],
    })
  }


  onSubmit(){
    this.mobileData.push(this.mobileForm.value);
    // console.log(this.mobileData)
  }

  edit(id){
    this.rec_id = id;
    this.mobileForm = this.formBuilder.group({
      name: [this.mobileData[id].name],
      description: [this.mobileData[id].description],
      category: [this.mobileData[id].category],
      price: [this.mobileData[id].price],
      quantity:[this.mobileData[id].quantity],
    })
  }

  update(){
    this.rec_id;
    this.mobileData.splice(this.rec_id,1,this.mobileForm.value);
  }

  delete(id){
    this.mobileData.splice(id,1);
  }

}
