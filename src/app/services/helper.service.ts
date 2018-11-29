import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
  menu: Subject<boolean>;
  constructor() {
    this.menu = new Subject<boolean>();
  }

  getMenu(): Subject<boolean> {
    return this.menu;
  }
  setMenu(exist: boolean): void {
    const timer$ = timer(0)
      .subscribe(() => {
        this.getMenu()
          .next(exist);
        timer$.unsubscribe();
      });
  }
}
