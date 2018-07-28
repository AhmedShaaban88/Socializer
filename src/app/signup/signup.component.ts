import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.js';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {IsUserService} from '../is-user.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  statusConf = false;

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
      fname: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z\\-]+$')])],
      lname: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z\\-]+$')])],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$')]],
      conf_password: ['', [Validators.required, Validators.minLength(8)]],
      bd: ['', Validators.required],
      gender: ['', Validators.required]
    });


  }

  get fname() {
    return this.registerForm.get('fname').errors;


  }

  get lname() {
    return this.registerForm.get('lname').errors;


  }

  get pass() {
    return this.registerForm.get('password').errors;
  }

  check_conf(value: string) {
    this.statusConf = value === this.registerForm.get('password').value ? true : false;

  }

  checkForm() {
    if (this.statusConf) {
      if (!this.registerForm.invalid) {
        return false;
      }
    }
    return true;
  }

  submit(): void {
    this.log.login().subscribe(() => {
      if (this.log.userLogin) {
        this.router.navigate(['/main']);
      }
    });
  }

  canDeactivate(): Observable<boolean> | boolean {

    if (this.registerForm){
      return false;
    }
    return of(window.confirm('a'));

  }
}




