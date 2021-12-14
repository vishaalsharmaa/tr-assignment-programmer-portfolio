import { Component , OnInit } from '@angular/core';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faGooglePlus,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faGooglePlus = faGooglePlus;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  public linkedInURL:any

  ngOnInit(): void {
    var userData = JSON.parse(localStorage.getItem('userPortfolioData'));
    this.linkedInURL = userData.linkedInURL ? userData.linkedInURL : '#'; 
  }
 
}
