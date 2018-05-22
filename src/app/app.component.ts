import {Component, OnInit} from '@angular/core';
import {IssCoordinatesService} from './shared/iss-coordinates.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  num = Number;
  zoom: number = 4;
  iss_coords: { latitude: number, longitude: number } = {latitude: 0, longitude: 0};

  constructor(private issCoordinates: IssCoordinatesService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.iss_coords = this.issCoordinates.getPosition();
      setInterval(() => {
        this.iss_coords = this.issCoordinates.getPosition();
      }, 5000);
    }, 2000);
  }

}
