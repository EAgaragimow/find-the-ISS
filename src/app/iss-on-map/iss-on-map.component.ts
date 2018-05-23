import { Component, OnInit } from '@angular/core';
import {IssCoordinatesService} from '../shared/iss-coordinates.service';

@Component({
  selector: 'app-iss-on-map',
  templateUrl: './iss-on-map.component.html',
  styleUrls: ['./iss-on-map.component.css']
})
export class IssOnMapComponent implements OnInit {

  num = Number;
  zoom: number = 3;
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
