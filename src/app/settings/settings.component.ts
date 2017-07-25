import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../models/user';
import {LoggerService} from '../services/logger.service';
import {PhotoService} from '../services/photo.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [],
  providers: [LoggerService]
})

export class SettingsComponent implements OnInit {

  users;
  photos;

  constructor(private userService: UserService, private photoService: PhotoService, private logService: LoggerService) {
    this.users = userService.getUsers();
    this.photos = photoService.getPhotos();
  }

  ngOnInit() {
  }

  logUsers() {
    this.logService.log(this.users);
  }

}
