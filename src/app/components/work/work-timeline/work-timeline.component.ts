import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-timeline',
  templateUrl: './work-timeline.component.html',
  styleUrls: ['./work-timeline.component.scss']
})
export class WorkTimelineComponent implements OnInit {

  public userData:any;
  
  constructor() { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userPortfolioData'));
  }

}
