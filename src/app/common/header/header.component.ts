import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { DataShareService } from 'src/app/common/dataShare.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = ['Home', 'About US', 'Contact US', 'Login', 'LogOut'];
  activeLink = null;
  isUserLogIn = false;
  userDetails = {};
  loginbuttonlabel = 'LogIn';
  logOutbuttonlabel= "LogOut"

  constructor(private router: Router,
              private sharedService: DataShareService) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart){
        if(localStorage.getItem('currentUser')) {
          this.sharedService.reloadUserData(true);
          this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
          this.isUserLogIn = true;
        } else {
          this.isUserLogIn = false;
        }
        if(event.url == '/home' || event.url == '/') {
          this.activeLink = 'Home';
        } else if(event.url == '/about-us') {
          this.activeLink = 'About US'
        } else if(event.url == '/contact-us') {
          this.activeLink = 'Contact US'
        } else if(event.url == '/login') {
          this.activeLink = 'Login'
        } else {
          this.activeLink = '';
        }
      }
    });
  }

  redirectToPage(link) {
    this.activeLink = link;
    switch(link) { 
      case 'Home': { 
         this.router.navigate(['home']);
         break; 
      } 
      case 'About US': { 
         this.router.navigate(['about-us']);
         break; 
      } 
      case 'Contact US': { 
        this.router.navigate(['contact-us']);
        break; 
      }
      case 'Login': { 
        this.router.navigate(['login']);
        break; 
      } 
      default: { 
         break; 
      } 
   } 
  }

  logOut() {
    localStorage.removeItem('currentUser');
    if(this.router.url != '/home') {
      this.sharedService.reloadUserData(true);
      this.router.navigate(['home']);
    } else {
      this.activeLink = 'Home';
      this.isUserLogIn = false;
      this.sharedService.reloadUserData(true);
    }
  }
}
