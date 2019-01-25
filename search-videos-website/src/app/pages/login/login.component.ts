import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import SecurityHelper from '../../../helpers/securityHelper';
import { Constants } from '../../../config/constants';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  message: string;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    Constants.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    $.showLoading('#frmLogin');
    this.userService.login(this.formGroup.value).then(
      data => {
        if (data) {
          SecurityHelper.createStoreAuthen(data);
          SecurityHelper.createStore('user.name', data.user.fullname);
          this.router.navigate([Constants.returnUrl]);
        } else {
          this.message = 'Username/Password incorrect';
        }
        $.hideLoading('#frmLogin');
      },
      err => {
        $.hideLoading('#frmLogin');
        $.error(err.message);
      }
    );
  }
}
