import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ShareModule } from '../../components/share/share.module';
import { RegisterComponent } from '../register/register.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, ShareModule],
  exports: [RegisterComponent],
})
export class LoginModule {}
