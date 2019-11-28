import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-baby-clothes',
  templateUrl: './baby-clothes.component.html',
  styleUrls: ['./baby-clothes.component.css']
})
export class BabyClothesComponent implements OnInit {

  
  babyClothesData: Array<any> = [];
  babyClothesForm: FormGroup;
  rec_id = 0;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.babyClothesForm = this.formBuilder.group({
      name: [],
      description: [],
      category: [],
      price: [],
      quantity:[],
    })
  }


  onSubmit(){
    this.babyClothesData.push(this.babyClothesForm.value);
    // console.log(this.babyClothesData)
  }

  edit(id){
    this.rec_id = id;
    this.babyClothesForm = this.formBuilder.group({
      name: [this.babyClothesData[id].name],
      description: [this.babyClothesData[id].description],
      category: [this.babyClothesData[id].category],
      price: [this.babyClothesData[id].price],
      quantity:[this.babyClothesData[id].quantity],
    })
  }

  update(){
    this.rec_id;
    this.babyClothesData.splice(this.rec_id,1,this.babyClothesForm.value);
  }

  delete(id){
    this.babyClothesData.splice(id,1);
  }
}
