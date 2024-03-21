import { Component, OnInit } from '@angular/core';
import { NavbarInterface, NavbarLinks } from '../../modals/navbar';
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/main/core/services/cognito.service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  navbarData: NavbarInterface[] = NavbarLinks;

  constructor(private router: Router, private cognitoService: CognitoService) {}

  ngOnInit(): void {
  }
  navigateToNavComponent(navItem: NavbarInterface) {
    if(navItem?.label != 'SignOut'){
      this.router.navigate([navItem.route]);
    }else{
      this.cognitoService?.SignOut();
    }
  }

}
