import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { SectionComponent } from './section.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ClockComponent } from '../clock/clock.component';



@NgModule({
  declarations: [
    SectionComponent,
    StopwatchComponent,
    ButtonsComponent,
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    SectionComponent
    
  ]
})
export class SectionModule { }
