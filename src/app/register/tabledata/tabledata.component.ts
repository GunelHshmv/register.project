import { Component, Input, OnInit } from '@angular/core';
import { stdList } from 'src/app/models/stdlist';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {
@Input("tableList") studentList!:Array<stdList>
  constructor() { }

  ngOnInit(): void {
  }

}
