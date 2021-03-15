import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { 
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
      }
}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', Validators.required]
    });

 }

   //convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

   onSubmit() {
     this.submitted = true;

     //reset alerts on submit
     this.alertService.clear();

     //stop here if form is invalid
     if (this.loginForm.invalid){
       return;
     }

     this.loading = true;
     this.authenticationService.login(this.f.usernameOrEmail.value, this.f.password.value)
          .pipe(first())
          .subscribe({
            next: () => {
                //get return url from route parameters or default to '/'
                  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/employees';
                  this.router.navigate([this.returnUrl]);
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
              }
            });
   }
}
