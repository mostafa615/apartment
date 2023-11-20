import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      // this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  messageSuccess:any="false"
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.error = '';
    this.loading = true;
    console.log('this.f',this.f);

    this.authenticationService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value   )
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from route parameters or default to '/'
          console.log('ssssssssssssssssssssssssucesssssssssssssss');
          debugger
          // const returnUrl = this.route.dsnapshot.queryParams['returnUrl'] || '/';
          this.router.navigate(['/dashboard']);
        },
        error: error => {
          debugger
          this.messageSuccess = "true";

            setTimeout(()=>{                           // <<<---using ()=> syntax
                this.messageSuccess = "false";
            }, 3000);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: ` ${error.error.errorMessage}` });

          this.error = error.error.errorMessage;
          this.loading = false;
        }
      });
  }

}
