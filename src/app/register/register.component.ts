import { Component, OnInit } from '@angular/core';
import { ValidatesService} from '../services/validates.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

// implements OnInit
export class RegisterComponent  {

  constructor(private theValid: ValidatesService) { }

  localRegi() {
    const userEmailR: HTMLInputElement = document.getElementById('emailR') as HTMLInputElement;
    const userNameR: HTMLInputElement = document.getElementById('userTxtR')  as HTMLInputElement;
    const userPassR: HTMLInputElement = document.getElementById('passwordR') as HTMLInputElement;
    const token = 'User123';

    const cahek =  this.theValid.registerValid({ E: userEmailR.value, U: userNameR.value, P: userPassR.value });

    if (cahek === 'Classic') {
      const user = userNameR.value;
      const user2 =  user.toUpperCase();
      const password = [{passwordd: userPassR.value, email: userEmailR.value}];
      const allreadySigned = localStorage.getItem(token + user2) ? JSON.parse(localStorage.getItem(token + user2)) : null;
      if (allreadySigned == null) {
        localStorage.setItem(token  + user2, JSON.stringify(password));
        alert ('User is set');
        } else  {
          alert('User allready exist! Go to login...');
        }
     }  else {
       alert ('not all the filds are full');
     }

    userNameR.value = '';
    userPassR.value = '';
    userEmailR.value = '';
  }
}
