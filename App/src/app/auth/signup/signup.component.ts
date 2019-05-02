import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import {Signup} from 'src/app/auth/signup/signup.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  id: number;

  constructor(private route: ActivatedRoute, private authService: AuthService, 
              private router: Router) { }

    ngOnInit() {
      this.route.params
      .subscribe(
        (params: Params) => {
  // tslint:disable-next-line: no-string-literal
          this.id = +params['id'];
  // tslint:disable-next-line: no-string-literal
          this.initForm();
        }
      );
    }

    onSubmit() {
    
        this.authService.addSignup(this.signupForm.value);
    
   
    }

  private initForm() {
    let signupName = '';
    let signupLastname = '';
    let signupLocalidad = '';
    let signupNumber = '';
    let signupMail = '';
    let signupPassword = '';
    let signupType = '';
    

    this.signupForm = new FormGroup({
// tslint:disable-next-line: object-literal-key-quotes
      'name': new FormControl(signupName, Validators.required),
// tslint:disable-next-line: object-literal-key-quotes
      'lastname': new FormControl(signupLastname, Validators.required),
// tslint:disable-next-line: object-literal-key-quotes
      'localidad': new FormControl(signupLocalidad, Validators.required ),
      'number': new FormControl(signupNumber, Validators.required),
      // tslint:disable-next-line: object-literal-key-quotes
            'mail': new FormControl(signupMail, Validators.required),
      // tslint:disable-next-line: object-literal-key-quotes
            'password': new FormControl(signupPassword, Validators.required ),
            'type': new FormControl(signupType, Validators.required )
      
    });
  }

  onSignup(form: NgForm)
  {
    
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }

  /*onSaveDataSignup()
  {
    this. dataStorageService.storeSignups()
    .subscribe(); 
      console.log('guardo');
    
  }*/

}
