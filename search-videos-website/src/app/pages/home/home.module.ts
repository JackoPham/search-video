import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GooglemapsComponent } from 'src/app/components/home/googlemaps.component';
import { ShareModule } from 'src/app/components/share/share.module';

@NgModule({
  declarations: [HomeComponent, GooglemapsComponent],
  imports: [CommonModule, ShareModule],
  entryComponents: [GooglemapsComponent],
})
export class HomeModule {}
