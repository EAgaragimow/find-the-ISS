import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class IssCoordinatesService {

  ISS_coords: { latitude: number, longitude: number };

  constructor(private httpClient: HttpClient) {
    this.getISSInfo();
  }

  getISSInfo() {
    return this.httpClient.get('http://api.open-notify.org/iss-now.json')
      .subscribe((data) => {
        this.ISS_coords = data['iss_position'];
      });
  }

  getPosition() {
    this.getISSInfo();
    return this.ISS_coords;
  }

}
