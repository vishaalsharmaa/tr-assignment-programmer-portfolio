import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  public enablePortfolioBuilder: boolean = false;
  
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.verifyData();
  }

  public verifyData() {
    var resumeData = localStorage.getItem('userPortfolioData');
    
    if(resumeData) {
      this.router.navigate(['/about']);
    }
    else {
      this.enablePortfolioBuilder = true;
      this.router.navigate(['/builder']);
    }

  }
}
