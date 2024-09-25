import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionModule } from './section/section.module';
import { ClockComponent } from './clock/clock.component';
import { StopwatchComponent } from './section/stopwatch/stopwatch.component';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  {
    path: 'stopwatch',
    component : SectionComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  }
]

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    SectionModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LayoutComponent,
    RouterModule
  ]
})
export class LayoutModule { }
