import { Component, OnInit } from '@angular/core';
import { ValidatesService} from '../services/validates.service';


@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  // user;
  userLog;
  userLogin;
  constructor(service: ValidatesService) {
  this.userLog = service.userLogo();
  this.userLogin = service.loginLogo();

  }


ngOnInit() {
}

logOut() {
  sessionStorage.clear();
  location.reload();
}
}
