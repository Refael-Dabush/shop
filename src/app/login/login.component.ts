import { Component, OnInit } from '@angular/core';
import { ValidatesService} from '../services/validates.service';
import { stringify } from '@angular/compiler/src/util';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private vaildEn: ValidatesService , private router: Router) { }

  loginC() {
    const userNL: HTMLInputElement = document.getElementById('userNameLog') as HTMLInputElement;
    const userPassL: HTMLInputElement = document.getElementById('userPassLog') as HTMLInputElement;
    const checkL = this.vaildEn.loginValid({U2: userNL.value, P2: userPassL.value});
    const userNLU = userNL.value.toUpperCase();
    const userNLD = userNLU.toLowerCase();
    const token = 'User123';
    const userNameL = localStorage.getItem(token + userNLU);

    if (userNameL !== null) {
      if (checkL) {
        const pass = [];
        pass.push(JSON.parse(localStorage.getItem(token + userNLU)));
        const pass2 = pass[0][0].passwordd;

        const userLogin =  this.vaildEn.upUser(pass2, userPassL.value, userNLD);
        if (userLogin !== 'user name') {
          this.relodAndRefres();
        } else {
          alert('שם משתמש או סיסמה שגוי');
        }

      } else {
        alert('השדות לא מלאים');
        }

    } else {
      alert ('שם משתמש לא קיים במערכת');
    }
  }

  phseF() {
    setTimeout(() => {
      location.reload();
    }, 100);
  }

  async relodAndRefres() {
    alert('התחברת בהצלחה');
    this.router.navigateByUrl('');
    await this.phseF();
  }

}


