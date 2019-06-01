import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  images: string[];
  actualImage: string;

  constructor() {
    this.images = [
      "assets/img/vumarks/QR_antorcha.jpg",
      "assets/img/vumarks/QR_busto.jpg",
      "assets/img/vumarks/QR_caja.jpg",
      "assets/img/vumarks/QR_cofre.jpg",
      "assets/img/vumarks/QR_cuadro.jpg",
      "assets/img/vumarks/QR_dibujo1.jpg",
      "assets/img/vumarks/QR_estanteria.jpg",
      "assets/img/vumarks/QR_gargola.jpg",
      "assets/img/vumarks/QR_knight.jpg",
      "assets/img/vumarks/QR_oso.jpg",
      "assets/img/vumarks/QR_papel.jpg",
      "assets/img/vumarks/QR_puerta.jpg",
      "assets/img/vumarks/QR_reloj.jpg",
      "assets/img/vumarks/QR_silla_llave.jpg"
    ]
    this.actualImage = this.images[0];
  }

  ngOnInit() {
  }


  clickImage(image: string) {
    this.actualImage = image;
  }
}