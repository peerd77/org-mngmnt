import { Component, OnInit } from '@angular/core';
import { Enums } from 'src/app/models/enums';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  enums: typeof Enums;

  constructor() {
    this.enums = Enums;
  }

  ngOnInit() {
  }

}
