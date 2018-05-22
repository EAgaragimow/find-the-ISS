import {Component, OnInit} from '@angular/core';
import {IssCoordinatesService} from '../shared/iss-coordinates.service';
import {GetTimeService} from '../shared/get-time.service';

@Component({
  selector: 'app-current-utc-time',
  templateUrl: './current-utc-time.component.html',
  styleUrls: ['./current-utc-time.component.css']
})
export class CurrentUtcTimeComponent implements OnInit {

  date: number = 0;

  constructor(private timeService: GetTimeService) {
  }


  ngOnInit() {
    setTimeout(() => {
      this.date = this.timeService.getTimestamp();
      setInterval(() => {
        this.date = this.timeService.getTimestamp();
      }, 5000);
      console.log(this.date);
    }, 2500);
  }

}
