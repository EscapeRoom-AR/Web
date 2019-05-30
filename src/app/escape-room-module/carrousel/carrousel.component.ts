import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  images: string[];

  constructor() {
    this.images = [
      "assets/img/IMG1.jpg",
      "assets/img/IMG2.jpg",
      "assets/img/IMG3.jpg",
      "assets/img/IMG4.jpg",
      "assets/img/IMG5.jpg"
    ]
  }

  ngOnInit() {
  }

}
