import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';


import {SharedModule} from './shared/shared.module';


import {AppComponent} from './app.component';
import {AstronautsComponent} from './astronauts/astronauts.component';
import {IssLocatedNowComponent} from './iss-located-now/iss-located-now.component';
import {CurrentUtcTimeComponent} from './current-utc-time/current-utc-time.component';


@NgModule({
  declarations: [
    AppComponent,
    AstronautsComponent,
    IssLocatedNowComponent,
    CurrentUtcTimeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUQZSLdBNV1a9Xed6xmO__imBcDhU_YQY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
