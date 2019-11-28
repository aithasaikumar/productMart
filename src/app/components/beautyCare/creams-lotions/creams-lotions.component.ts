import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-creams-lotions',
  templateUrl: './creams-lotions.component.html',
  styleUrls: ['./creams-lotions.component.css']
})
export class CreamsLotionsComponent implements OnInit {

  creamsLotionsData: Array<any> = [];
  creamsLotionsForm: FormGroup;
  rec_id = 0;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.creamsLotionsForm = this.formBuilder.group({
      name: [],
      description: [],
      category: [],
      price: [],
      quantity:[],
    })
  }


  onSubmit(){
    this.creamsLotionsData.push(this.creamsLotionsForm.value);
    // console.log(this.creamsLotionsData)
  }

  edit(id){
    this.rec_id = id;
    this.creamsLotionsForm = this.formBuilder.group({
      name: [this.creamsLotionsData[id].name],
      description: [this.creamsLotionsData[id].description],
      category: [this.creamsLotionsData[id].category],
      price: [this.creamsLotionsData[id].price],
      quantity:[this.creamsLotionsData[id].quantity],
    })
  }

  update(){
    this.rec_id;
    this.creamsLotionsData.splice(this.rec_id,1,this.creamsLotionsForm.value);
  }

  delete(id){
    this.creamsLotionsData.splice(id,1);
  }

}
