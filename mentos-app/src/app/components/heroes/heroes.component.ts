import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  message:any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.message = this.userService.getUser();
  }

}
