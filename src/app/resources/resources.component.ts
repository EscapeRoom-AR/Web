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
<<<<<<< HEAD
      "assets/img/logo.png"
=======
      "/assets/img/logo.png"
>>>>>>> afd5e0538139af062ea46073dcac755f18ac9d34
    ]
  }

  ngOnInit() {
  }

}
