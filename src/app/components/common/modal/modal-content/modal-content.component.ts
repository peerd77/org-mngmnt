import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Enums } from 'src/app/models/enums';
import { BaseComponent } from '../../base/base.component';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent extends BaseComponent implements OnInit {
  @Input() modalType: Enums.EmployeePosition;
  @Output() outputDate: EventEmitter = new EventEmitter();

  text: string;
  date: Date;


  constructor(public modal: NgbActiveModal) {
    super();
  }

  ngOnInit() {
  }

  save() {
    this.modal.close({
      text: this.text,
      date: this.date
    })
  }

  onDateChange(event: Date) {
    this.date = event;
  }

}
