import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MyValidations } from './my-validations.class';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../app/shared/services/user-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private userService: UserService) { }

  myGroup: FormGroup;
  submitted: boolean;
  ngOnInit() {
    //my form controls:
    this.myGroup = this.formBuilder.group({
      tz: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), MyValidations.validateTz]],
      age: ['', [Validators.required, , MyValidations.validateAge]],
      name: ['', [Validators.required, , MyValidations.validateName]],
      country: ['', [Validators.required, , MyValidations.validateCountry]],
      isMale: [false,]
    });
  }

  //get my controls:
  get f() {
    return this.myGroup.controls;
  }
  onSubmit() {
    this.submitted = true;
    //check if the form is valid  according to my custom validations(see class "my-validations")
    if (this.myGroup.invalid) {
      return;
    }
    //transform data to the service:
    this.userService.postUser(JSON.stringify(this.myGroup.value));

  }


}
