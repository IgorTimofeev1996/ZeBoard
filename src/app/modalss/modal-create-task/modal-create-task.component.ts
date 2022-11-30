import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-modal-create-task',
  templateUrl: './modal-create-task.component.html',
  styleUrls: ['./modal-create-task.component.scss']
})
export class ModalCreateTaskComponent implements OnInit {
  myform!: any;

  @Output() close = new EventEmitter<void>()


  constructor() {

  }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl('')
    });

  }

  onSubmit() {
    localStorage.setItem('data', JSON.stringify(this.myform.value));

  }

  remove() {
    localStorage.removeItem('data')
  }

};


