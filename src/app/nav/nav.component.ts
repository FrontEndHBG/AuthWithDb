import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: Observable<firebase.User>;
  constructor(public fAuth: AngularFireAuth, public router: Router) {
    this.user = this.fAuth.authState;

  }

  ngOnInit() {

  }

  signOut() {
    this.fAuth.auth.signOut();
    this.router.navigate(['/']);
  }

}
