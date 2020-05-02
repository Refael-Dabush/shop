import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ValidatesService {

  constructor() {
  }

  registerValid({ E, U, P }: { E: any; U: string; P: any; }) {
    if (E && U && P) {
      return 'Classic';
    } else {
        return 'Not';
      }
    }

   loginValid({ U2, P2 }: { U2: any; P2: any; }) {
        // tslint:disable-next-line: triple-equals
        if (U2 && P2) {
          return 'Classic';
        }
      }

  upUser(localPass: string, newPass: string | HTMLInputElement, uName: string) {
    let userName = 'user name';

    if (localPass === newPass) {
      userName = uName;
      sessionStorage.setItem('loggedUser', uName);
    } else {
      userName = 'user name';
    }
    return userName;
  }

  userLogo() {
    const usernum = sessionStorage.getItem('loggedUser');
    if ( usernum == null) {
      return 'Hello User';
    } else {
      return 'Hello ' + usernum ;
    }
  }

  loginLogo() {
    const userLogin = this.userLogo();
    if (userLogin !== 'Hello User') {
      return 'no';
     }  else {
       return 'Login';
     }
  }


}

