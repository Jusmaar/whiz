import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-fixed-component',
  templateUrl: './fixed.component.html'
})

export class FixedComponent implements OnInit {
  showBtn: boolean;
  constructor(
    private helperService: HelperService
  ) {
    this.showBtn = true;
  }

  ngOnInit() {
    this.helperService.getMenu()
      .subscribe(res => {
        this.showBtn = !res;
      });
  }

  openMenu() {
    this.helperService.setMenu(true);
    this.showBtn = !this.showBtn;
  }
}
