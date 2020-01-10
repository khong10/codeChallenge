import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainCoverComponent } from './main-cover/main-cover.component';
import { SubCoverComponent } from './sub-cover/sub-cover.component';
import { MostRecentComponent } from './most-recent/most-recent.component';
import { TrackingComponent } from './tracking/tracking.component';
import { MatCardModule} from '@angular/material/card';
import { GoogleChartsModule } from 'angular-google-charts';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainCoverComponent,
    SubCoverComponent,
    MostRecentComponent,
    TrackingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
