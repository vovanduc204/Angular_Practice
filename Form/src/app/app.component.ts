import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') userFrm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    //  this.userFrm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'teacher',
    //   questionAnswer: '',
    //   gender: 'female'
    // });
    this.userFrm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);

  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.userFrm.value.userData.username;
    this.user.email = this.userFrm.value.userData.email;
    this.user.secretQuestion = this.userFrm.value.secret;
    this.user.answer = this.userFrm.value.questionAnswer;
    this.user.gender = this.userFrm.value.gender;
    this.userFrm.reset();
  }
}
