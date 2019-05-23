import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { FooterComponent } from './footer/footer.component';
import { EscapeRoomComponent } from './escape-room.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CarrouselComponent,
    FooterComponent,
    EscapeRoomComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    CarrouselComponent,
    FooterComponent
  ]
})
export class EscapeRoomModule { }
