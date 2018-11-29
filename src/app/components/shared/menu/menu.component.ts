import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {
  showMenuBool: boolean;
  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.helperService.getMenu()
      .subscribe(res => {
        this.showMenuBool = res;
      });
  }

  closeMenu() {
    this.showMenuBool = false;
    this.helperService.setMenu(false);
  }
}
