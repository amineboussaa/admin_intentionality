import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.css']
})
export class StarterHeaderComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  logout() {
     localStorage.removeItem("currentUser");
     this.router.navigate(['/login']);
  }
}
