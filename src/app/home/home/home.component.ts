import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/common/dataShare.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userDetails: any;

  constructor(private title: Title,
              private route: Router,
              private announcer: LiveAnnouncer,
              private sharedService: DataShareService) { }

  ngOnInit(): void {
    this.title.setTitle("Home"); // Set the home page title
    this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
    this.sharedService.shareData.subscribe(data =>{
      this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
    });

  }

  redirectToAboutus() {
    this.route.navigate(['about-us']); // Redirect to about us page
  }

  redirectToContactus() {
    this.route.navigate(['contact-us']); // Redirect to contact us page
  }

  helloMessage() {
    this.announcer.announce("Hello, Welcome to the universe."); // Announce a hello message 
  }

  screenReaderInfo() {
    this.announcer.announce("A screen reader is a software application that enables people with severe visual impairments to use a computer. Screen readers work closely with the computer's Operating System (OS) to provide information about icons, menus, dialogue boxes, files and folders."); // Announce a screen reader information.
  }
}
