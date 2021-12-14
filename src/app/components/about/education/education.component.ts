import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  public userData:any;

  constructor() { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userPortfolioData'));
  }

}
