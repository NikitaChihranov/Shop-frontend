import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';
import {About} from '../models/about';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutContent: About;
  filesToUpload: File[];
  filesToUpdate: File[];
  constructor( private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAbout().subscribe((res) => {
      this.aboutContent = res;
    });
  }
  create(aboutForm: NgForm) {
    this.aboutService.create(aboutForm.value).subscribe((res) => {
      this.aboutService.uploadLogo(this.filesToUpload, res).subscribe((response) => {
        this.aboutContent = response;
      });
    });
  }
  update(aboutForm: NgForm) {
    this.aboutService.update(aboutForm.value).subscribe((res) => this.aboutContent = res);
  }
  delete() {
    this.aboutService.delete().subscribe((res) => {
      this.aboutContent = res;
    });
  }
  fileChangeEvent(event: any) {
    this.filesToUpload = (<any>event.target).files;
    console.log(this.filesToUpload);
  }
  fileUpdateEvent(event: any) {
    this.filesToUpdate = (<any>event.target).files;
    console.log(this.filesToUpdate);
  }
}
