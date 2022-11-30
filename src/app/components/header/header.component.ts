import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ModalCreateColumnComponent = false;
  ModalCreateTaskComponent = false;

  constructor() { }

  ngOnInit(): void {
  }

}

