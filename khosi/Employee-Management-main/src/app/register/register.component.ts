import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { first } from 'rxjs/operators';
import { UserService } from '../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:[ './register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading= false;
    submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService
    //private employeeService

  ) { 
    //redirect to home if already logged in
    if(this.authenticationService.currentUserValue){
        this.router.navigate(['/']);
    }
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  //convinience getter for easy access to form fields
  get f() { return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;

    //reset alerts on submit
    this.alertService.clear();

    //stop here if form is invalid
    if (this.registerForm.invalid){
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe({
          next: () => {
            this.alertService.success('Registration successful',  true );
            this.router.navigate(['/login'], { relativeTo: this.route });
        },
        error: error => {
                this.alertService.error(error);
                this.loading = false;
              }
            });
  }

}
