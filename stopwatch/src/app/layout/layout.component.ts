import { Component } from '@angular/core';
import { PageToggleService } from '../share/page-toggle.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(
    private pageToggleService: PageToggleService    
  ){

  }

  count() {
    return this.pageToggleService.routingCount
  }
}
