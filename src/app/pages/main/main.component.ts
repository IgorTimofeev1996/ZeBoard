import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {

  myid!: any;
  column!: any;

  constructor() {
  }

  ngOnInit() {
      this.display();
    }

    private display() {
      this.myid = localStorage.getItem('data');
      this.column = JSON.parse(this.myid)

    }

}
