import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../escape-room-module/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from '../escape-room-module/carrousel/carrousel.component';
import { FooterComponent } from '../escape-room-module/footer/footer.component';
import { EscapeRoomComponent } from './escape-room.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    CarrouselComponent,
    FooterComponent,
    EscapeRoomComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CarrouselComponent,
    FooterComponent
  ]
})
export class EscapeRoomModule { }
