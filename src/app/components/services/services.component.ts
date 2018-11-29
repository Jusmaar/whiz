import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-component',
  templateUrl: './services.component.html'
})

export class ServicesComponent implements OnInit {
  tiBool: boolean;
  mktBool: boolean;
  constructor() {
    this.mktBool = true;
    this.tiBool = true;
  }

  ngOnInit() { }

  showService(type) {
    if (type === 'TI') {
      this.tiBool = false;
    } else {
      this.mktBool = false;
    }
  }
}
