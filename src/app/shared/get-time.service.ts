import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetTimeService {

  ISS_time: number;

  constructor(private httpClient: HttpClient) {
    this.getISSInfo();
  }

  getISSInfo() {
    return this.httpClient.get('http://api.open-notify.org/iss-now.json')
      .subscribe((data) => {
        this.ISS_time = data['timestamp'];
      });
  }

  getTimestamp() {
    this.getISSInfo();
    return this.ISS_time;
  }

}
