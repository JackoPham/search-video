import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import SecurityHelper from 'src/helpers/securityHelper';
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  create() {
    $.showLoading();
    this.userService.create(this.formGroup.value).then(res => {
      if (res && res.id > 0) {
        $.success('Register was success');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 500);
      } else {
        $.error('Register not success');
      }
      $.hideLoading();
    });
  }
}
