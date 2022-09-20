import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LogsignService } from '../logsign.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frm= new FormGroup({
    name1: new FormControl('',[
      Validators.required,
      Validators.email,
      Validators.minLength(7)
    ]),
    pwd: new FormControl('', Validators.pattern('^[a-z][A-Z]@[1-9]$')),
  })

  jsn1 = [
    {
        id:'name',
        label:'User Name',
        class:'c1',
        type:'text',
        fgn:'name1',
        icon:'fa fa-user fa-2x'
    },
    {
      id:'password',
      label:'Password',
      class:'c1',
      type:'password',
      fgn:'pwd',
      icon:'fa fa-key fa-2x'

  },
  {
    id:'submit',
    label:'',
    class:'btn btn-secondary ',
    type:'submit',
    fgn:''
}

]

  constructor( public router:Router, public serv:LogsignService) { 
    console.log(localStorage);
    
  }

  ngOnInit(): void {
  }
  // signUp(){
  //   localStorage.setItem(
  //     JSON.stringify(this.frm.value.email),
  //     JSON.stringify(this.frm.value.pwd)
  //   );
    
  // }
  LOGIN(){
    console.log(this.frm.value.name1);
    
    var v22 = localStorage.getItem(JSON.stringify(this.frm.value.name1));
    console.log(v22);
    

    if(v22 ==JSON.stringify(this.frm.value.pwd) ){
      console.log("VALID");
      this.serv.login = true
        

      this.router.navigate(['home']);
      
    }
    else{
      alert('password / email is wrong ')
      this.router.navigate(['login']);
      console.log("INVALID");
      
    }
  }

}


