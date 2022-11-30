import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {FormControl, FormControlName, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-modal-create-column',
  templateUrl: './modal-create-column.component.html',
  styleUrls: ['./modal-create-column.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class ModalCreateColumnComponent implements OnInit {

  myform!: any;

  @Output() close = new EventEmitter<void>()


  constructor() {

  }

  ngOnInit() {
    this.myform = new FormGroup({
        name : new FormControl('')

    });

  }

  onSubmit() {
    localStorage.setItem('data', JSON.stringify(this.myform.value));

  }

  remove() {
    localStorage.removeItem('data')
  }
}

