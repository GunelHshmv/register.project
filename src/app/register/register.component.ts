import { Component, OnInit } from '@angular/core';
import { stdList } from '../models/stdlist';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  studentList:Array<stdList>=[
      {
        stdName:"Gunel",
        stdSurname:"Hashimova",
        stdAge:20,
        stdUni:"ADNSU",
        stdGroup:682.20,
        stdEmail:"hashimova@gmail.com",
        stdPhone:"0708444084"
      },
      {
        stdName:"Gunel",
        stdSurname:"Hashimova",
        stdAge:20,
        stdUni:"ADNSU",
        stdGroup:682.20,
        stdEmail:"gunelhashimova@gmail.com",
        stdPhone:"0708444084"
      }
  ]
  pushList(data:stdList){
    this.studentList.push(data)
  }
  ngOnInit(): void {
  }

}
