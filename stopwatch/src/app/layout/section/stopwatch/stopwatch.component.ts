import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from '../../../share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss'
})
export class StopwatchComponent {
  @Input() inputData: string;

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval: any

  constructor(
    private router: Router,
    private pageToggleService: PageToggleService
  ) {

  }

  timeStart() {
    this.timeInterval = setInterval(()=>{

      if(this.ms >= 99){
        this.ms= 0;
        this.sec++;
      }
      if(this.sec >= 60){
        this.sec = 0;
        this.min++
      }
      this.ms++
    },10)
  }

  timeStop() {
    clearInterval(this.timeInterval)
  }

  timeReset() {
    this.timeStop()
    this.min = 0
    this.sec = 0
    this.ms = 0
  }

  goClock() {
    this.pageToggleService.goPage('/clock')
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if(propName == 'inputData') {
        switch (changes[propName].currentValue) {
          case 'start':
            this.timeStart()
            break
          case 'stop':
            this.timeStop()
            break
          case 'reset':
            this.timeReset()
            break
        }
      }
    }
  }
}
