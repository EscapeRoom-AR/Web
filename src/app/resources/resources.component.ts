import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  images: string[];

  constructor() {
    this.images = [
      "/assets/img/logo.png"
    ]
  }

  ngOnInit() {
  }

}
