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
<<<<<<< HEAD
      "assets/img/about-us/IMG1.jpg",
      "assets/img/about-us/IMG2.jpg",
      "assets/img/about-us/IMG3.jpg",
      "assets/img/about-us/IMG4.jpg",
=======
      "/assets/img/about-us/IMG1.jpg",
      "/assets/img/about-us/IMG2.jpg",
      "/assets/img/about-us/IMG3.jpg",
      "/assets/img/about-us/IMG4.jpg",
>>>>>>> afd5e0538139af062ea46073dcac755f18ac9d34
    ]
  }

  ngOnInit() {
  }

}
