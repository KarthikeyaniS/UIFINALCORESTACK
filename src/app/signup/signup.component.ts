import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, RequiredValidator} from '@angular/forms';
import { LogsignService } from '../logsign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  sf = new FormGroup({
    name1: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(9)]),
    mail1: new FormControl(''),
    pw: new FormControl(''),
    pw1: new FormControl('',),
  });
  dta = [
    {
      label: 'Email ID',
      lbldta: 'E-Mail Id :',
      type: 'text',
      id: 'email_address',
      class1: 'form-control mail1',
      name: 'email-address',
      fcn: 'mail1',
      icon:'fa fa-envelope fa-2x',
      class:'c1',
    },

    {
      label: 'Name',
      lbldta: 'Name :',
      type: 'text',
      id: 'name',
      class1: 'form-control name',
      name: 'password',
      fcn: 'name1',
      icon:'fa fa-user fa-2x',
      class:'c1',
    },

    {
      label: 'Password',
      lbldta: 'password :',
      type: 'password',
      id: 'password',
      class1: 'form-control reenter',
      name: 'password',
      fcn: 'pw',
      icon:'fa fa-lock fa-2x',
      class:'c1',
    },

    {
      label: 'Confirm Password',
      lbldta: 'Reenter password :',
      type: 'password',
      id: 'password2',
      class1: 'form-control reenter',
      name: 'password',
      fcn: 'pw1',
      icon:'fa fa-key fa-2x',
      class:'c1',
    },
    {
      label: '',
      type: 'submit',
      id: 'signUp',
      class1: 'btn btn-secondary ',
      name: 'submit',
      fcn: 'sub',
      class:'c1',
    },


  ];

  constructor(public router: Router, public serv: LogsignService) { }

  ngOnInit(): void {
  }
  signup() {
    // console.log(this.sf.value); 
    localStorage.setItem(
      JSON.stringify(this.sf.value.mail1),
      JSON.stringify(this.sf.value.pw)
    );
    this.serv.login = true;
    this.serv.user = JSON.stringify(this.sf.value.mail1).slice(1,6)+"....";
    this.router.navigate(['home']);
  }

}
