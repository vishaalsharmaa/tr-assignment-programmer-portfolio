import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public userData:any;
  constructor() { }

  ngOnInit(): void {
    this.parseData();
  }

  parseData() {
    this.userData = JSON.parse(localStorage.getItem('userPortfolioData'));
    console.log(this.userData);
  }

}
