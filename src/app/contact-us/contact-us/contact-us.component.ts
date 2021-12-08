import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/common/dataShare.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  userDetails: any;

  constructor(private title: Title,
    private route: Router,
    private sharedService: DataShareService) { }

  ngOnInit(): void {
    this.title.setTitle("Contact US"); // Set the contact us page title
    this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
    this.sharedService.shareData.subscribe(data =>{
      this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
    });
  }

  redirectToHome() {
    this.route.navigate(['home']); // Redirect to home page
  }
  redirectToAboutus() {
    this.route.navigate(['about-us']); // Redirect to about us page
  }
}
