import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ShareModule } from '../../components/share/share.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ShareModule],
})
export class LoginModule {}
