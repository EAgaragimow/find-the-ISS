import {Component, OnInit} from '@angular/core';
import {IssCoordinatesService} from '../shared/iss-coordinates.service';

@Component({
  selector: 'app-iss-located-now',
  templateUrl: './iss-located-now.component.html',
  styleUrls: ['./iss-located-now.component.css']
})
export class IssLocatedNowComponent implements OnInit {

  iss_position: {latitude: number, longitude: number} = {latitude: null, longitude: null};

  constructor(private issCoordinates: IssCoordinatesService) {
  }

  ngOnInit() {

    setTimeout(() => {
      this.iss_position = this.issCoordinates.getPosition();
      setInterval(() => {
        this.iss_position = this.issCoordinates.getPosition();
      }, 5000);
      console.log(this.issCoordinates.getPosition());
    }, 2000);

  }

}
