import { Component, OnInit, Output,
EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() private closeModal = new EventEmitter<boolean>();

  constructor() { }

  public loginFormErrorMessage = '';

  public loginFormError = false;

  public login = {
    username: '',
    password: ''
  };

  ngOnInit() {
  }

  onSubmit() {
    if (this.login.username === 'natha') {
      this.loginFormErrorMessage = 'There is an error with your credentials';
      this.loginFormError = true;
    } else {
      setTimeout(() => {
        this.login.username = '';
        this.login.username = '';
      }, 1000);
      window.location.reload();
    }
  }

  close() {
    this.closeModal.emit(true);
  }

}
