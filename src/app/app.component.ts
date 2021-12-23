import { Component } from '@angular/core';
import * as moment from 'moment-timezone'
import { DateTime } from 'luxon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngTimezone';
  date: any = ""
  time: any = ""
  selectedLevel: any


  data: any[] = [
    { id: 0, name: "America/New_York" },
    { id: 1, name: "America/Los_Angeles"},
    { id: 2, name: "Europe/London" },
    { id: 3, name: "Asia/Bankonk" }
  ];

  selected() {
    console.log(this.selectedLevel)
  }
  newstring(){
    var newstring=this.date +" "+ this.time
    return newstring
  }
  converttime() {
    var m = moment.tz(this.newstring(),this.selectedLevel.name);
     console.log(m.tz("Asia/Kolkata").format());
     console.log(this.time);
  }
    
}
