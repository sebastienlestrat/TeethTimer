import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{

  name:string = "mon Sebounet";
  nbZones!: number;
  waitingTime!:number;
  time!:number;
  ionicForm : FormGroup;
  isSubmitted : boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      name : ['', [Validators.required, Validators.maxLength(20)]],
      nbZones : [15, [Validators.required]],
      waitingTime : [6, [Validators.required]],
      time : [16, [Validators.required]]
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log ('Merci de remplir tous les champs');
      return false;
    } else {
      console.log (this.ionicForm.value);
      alert("Paramètres enregistrés pour " + this.name);
      return true ;
    }
  }

}
