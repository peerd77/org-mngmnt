import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Enums } from 'src/app/models/enums';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends BaseComponent implements OnInit {
  @Input() modalType: Enums.ModalType;
  @Output() outputData = new EventEmitter();

  closeResult: string;
  date: Date;
  text: string;

  constructor(private modalService: NgbModal) {
    super();
  }

  ngOnInit() {
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.outputData.emit({
        text: this.text,
        date: this.date,
      });
    });
  }

}
