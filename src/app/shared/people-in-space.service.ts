import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface People {
  people: Array<{ name: string, craft: string }>;
}

@Injectable()
export class PeopleInSpaceService {

  peopleInSpace: People[] = [];

  constructor(private httpClient: HttpClient) {
    this.getPeopleInISS();
  }

  getPeopleInISS() {
    return this.httpClient.get('http://api.open-notify.org/astros.json')
      .subscribe((data: People[]) => {
        this.peopleInSpace = [];
        data['people'].forEach((people) => {
          if (people['craft'] === 'ISS') {
            this.peopleInSpace.push(people);
          }
        });
      });
  }

  getPeople() {
    this.getPeopleInISS();
    return this.peopleInSpace;
  }

}
