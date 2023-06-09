import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthClientService} from "../../../../service/auth-client.service";
import {JwtService} from "../../../../service/jwt.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router, private authService: AuthClientService,
              private jwtService: JwtService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/user/login');
  }

  getEmployee() {
    this.httpClient.get('http://localhost:8080/api/customer').subscribe(data => {
      console.log('http client');
      console.log(data);
    });
  }
}
