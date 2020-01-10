import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})

export class TrackingComponent implements OnInit {

  /* Mock data for graph including 
  current rate, party, color of the party, gap between current rate and previouse rate, index */
  public election:Array<any>=[
  {currBallot:34,party:'LIB',flagColor:'#ee1219',diff:3,rate: 35.8},
  {currBallot:26,party:'CON',flagColor:'#1a4782',diff:6,rate: 27.4},
  {currBallot:19,party:'NDP',flagColor:'#f37020',diff:-1,rate: 20.0},
  {currBallot:7,party:'GRN',flagColor:'#3c9b35',diff:-2,rate: 7.4},
  {currBallot:7,party:'BQ',flagColor:'#32b2cb',diff:4,rate: 7.4},
  {currBallot:2,party:'PPC',flagColor:'#0030a1',diff:-1,rate: 2.0}];

  constructor() { }

  ngOnInit() {
  
  }

}
