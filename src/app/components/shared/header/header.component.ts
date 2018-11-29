import { Component, OnInit, Input } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  @Input() title: string;
  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit() {
  }

  openMenu() {
    this.helperService.setMenu(true);
  }
}
