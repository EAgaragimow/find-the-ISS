import {Component, OnInit} from '@angular/core';
import {PeopleInSpaceService} from '../shared/people-in-space.service';

interface People {
  people: Array<{ name: string, craft: string }>;
}

@Component({
  selector: 'app-astronauts',
  templateUrl: './astronauts.component.html',
  styleUrls: ['./astronauts.component.css']
})
export class AstronautsComponent implements OnInit {

  peopleInSpace: People[] = [];

  constructor(private peopleInSpaceService: PeopleInSpaceService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.peopleInSpace = this.peopleInSpaceService.getPeople();
      setInterval(() => {
        this.peopleInSpace = this.peopleInSpaceService.getPeople();
      }, 5000);
    }, 2000);
  }

}
