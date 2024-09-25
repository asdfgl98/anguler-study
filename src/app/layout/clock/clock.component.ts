import { Component } from '@angular/core';
import moment from 'moment'

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent {
  timeString: string

  constructor() {
    setInterval(()=>{

    },1000)
  }

  getCurrentTime() {
    let result = moment().format('YYYY-MM-DD HH:mm:ss')
    return result
  }
}
