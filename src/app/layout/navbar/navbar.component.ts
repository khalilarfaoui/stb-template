import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private dialog: MatDialog){}
  ngOnInit(): void {
  }

  openLogin(){
    this.dialog.open(LoginComponent , {
      width: '600px', 
      disableClose: false,
    });
  }

}
