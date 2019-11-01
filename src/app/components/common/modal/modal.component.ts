import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Enums } from 'src/app/models/enums';
import { BaseComponent } from '../base/base.component';
import { ModalContentComponent } from './modal-content/modal-content.component';

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


  open() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.modalType = this.modalType;
    modalRef.componentInstance.outputData = this.outputData;
    modalRef.result.then(data => console.log('data ', data));
  }

}
