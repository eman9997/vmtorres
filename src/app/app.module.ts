import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ImageCarouselComponent } from './components/home/image-carousel/image-carousel.component';
import { MatCardModule } from '@angular/material/card';
import { SocialComponent } from './components/shared/social/social.component';
import { ConfettiComponent } from './components/shared/confetti/confetti.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BundlesComponent } from './components/bundles/bundles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventoryComponent,
    ContactComponent,
    NavbarComponent,
    ImageCarouselComponent,
    SocialComponent,
    ConfettiComponent,
    BundlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




