import {NgModule} from '@angular/core';

import {IssCoordinatesService} from './iss-coordinates.service';
import {PeopleInSpaceService} from './people-in-space.service';
import {GetTimeService} from './get-time.service';

@NgModule({
  providers: [
    IssCoordinatesService,
    PeopleInSpaceService,
    GetTimeService
  ]
})
export class SharedModule {}
