import { Component, Input, SimpleChanges } from '@angular/core';

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

  constructor() {

  }

  timeStart() {
    this.timeInterval = setInterval(()=>{
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
