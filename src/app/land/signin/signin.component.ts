import {Component, OnInit} from '@angular/core';
import * as M from '../../../assets/materialize/js/materialize.js';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {IsUserService} from '../../is-user.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private log: IsUserService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    const elems = document.querySelectorAll('.datepicker');
    const instances = M.Datepicker.init(elems, {});
    this.registerForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$')]],
    });
  }

  get pass() {
    return this.registerForm.get('password').errors;
  }

  submit(): void {
    $('.progress').removeClass('hide');
    $('#incorrect').addClass('hide');
    if (this.registerForm.get('email').value === localStorage.getItem('email') && this.registerForm.get('password').value === localStorage.getItem('password')) {
      this.log.login().subscribe(() => {
        if (this.log.userLogin) {
          this.router.navigate(['/main']);
        }
      });
    } else {
      $('.progress').addClass('hide');
      $('#incorrect').removeClass('hide');

    }
  }


}
