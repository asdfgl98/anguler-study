import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ClockComponent } from '../layout/clock/clock.component';

@Injectable(
  {
    providedIn: 'root'
  },
)
export class PageToggleService {

  routingCount: number = 0

  constructor(
    private router: Router
  ) { }

  goPage(target: string) {

    this.routingCount++
    this.router.navigateByUrl(target)
  }


}
