import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Enums } from 'src/app/models/enums';
import { BaseComponent } from '../../base/base.component';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
  // native adapter is bundled with library
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class ModalContentComponent extends BaseComponent implements OnInit {
  @Input() modalType: Enums.EmployeePosition;

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
    });
  }

  onDateChange(event: Date) {
    if(typeof(event) === "string")
      this.date = new Date();
    else  
      this.date = event;
  }

}
