import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-lip-care',
  templateUrl: './lip-care.component.html',
  styleUrls: ['./lip-care.component.css']
})
export class LipCareComponent implements OnInit {

 
  lipCareData: Array<any> = [];
  lipcaresForm: FormGroup;
  rec_id = 0;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.lipcaresForm = this.formBuilder.group({
      name: [],
      description: [],
      category: [],
      price: [],
      quantity:[],
    })
  }


  onSubmit(){
    this.lipCareData.push(this.lipcaresForm.value);
    // console.log(this.lipCareData)
  }

  edit(id){
    this.rec_id = id;
    this.lipcaresForm = this.formBuilder.group({
      name: [this.lipCareData[id].name],
      description: [this.lipCareData[id].description],
      category: [this.lipCareData[id].category],
      price: [this.lipCareData[id].price],
      quantity:[this.lipCareData[id].quantity],
    })
  }

  update(){
    this.rec_id;
    this.lipCareData.splice(this.rec_id,1,this.lipcaresForm.value);
  }

  delete(id){
    this.lipCareData.splice(id,1);
  }

}
