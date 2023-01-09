import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stdList } from 'src/app/models/stdlist';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
@Input('useList') useList!:Array<stdList>
  constructor() { }
@Output("addList") lists=new EventEmitter<stdList>()

  ngOnInit(): void {
  }
  studentName!:string
  studentSurname!:string
  studentAge!:number
  studentUni!:string
  studentGN!:any
  studentEmail!:any
  studentPhone!:any
  submit:boolean=false
  dis:boolean=false


  addClick(form:NgForm){
    console.log(form)
   this.submit=false
    if(form.valid){
    this.lists.emit({
    stdName:form.value.studentName,
    stdSurname:form.value.studentSurname,
    stdAge:form.value.studentAge,
    stdUni:form.value.studentUni,
    stdGroup:form.value.studentGN,
    stdEmail:form.value.studentEmail,
    stdPhone:form.value.studentPhone,
    })
    }
    else{this.submit=true}
  }
 

  
}


