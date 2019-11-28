import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-diapers',
  templateUrl: './diapers.component.html',
  styleUrls: ['./diapers.component.css']
})
export class DiapersComponent implements OnInit {

  diapersData: Array<any> = [];
  diapersForm: FormGroup;
  rec_id = 0;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.diapersForm = this.formBuilder.group({
      name: [],
      description: [],
      category: [],
      price: [],
      quantity:[],
    })
  }


  onSubmit(){
    this.diapersData.push(this.diapersForm.value);
    // console.log(this.diapersData)
  }

  edit(id){
    this.rec_id = id;
    this.diapersForm = this.formBuilder.group({
      name: [this.diapersData[id].name],
      description: [this.diapersData[id].description],
      category: [this.diapersData[id].category],
      price: [this.diapersData[id].price],
      quantity:[this.diapersData[id].quantity],
    })
  }

  update(){
    this.rec_id;
    this.diapersData.splice(this.rec_id,1,this.diapersForm.value);
  }

  delete(id){
    this.diapersData.splice(id,1);
  }


}
