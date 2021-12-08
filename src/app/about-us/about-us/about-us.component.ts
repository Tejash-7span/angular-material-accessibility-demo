import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/common/dataShare.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  userDetails: any;

  constructor(private title: Title,
    private route: Router,
    private sharedService: DataShareService) { }

  ngOnInit(): void {
    this.title.setTitle("About US"); // Set the about us page title
    this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
    this.sharedService.shareData.subscribe(data =>{
      this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
    });
  }

  redirectToHome() {
    this.route.navigate(['home']); // Redirect to home page
  }
  redirectToContactus() {
    this.route.navigate(['contact-us']); // Redirect to contact us page
  }
}
