import { Component } from '@angular/core';
import { ProfileSection } from "./profile-section/profile-section";

@Component({
  selector: 'app-profile',
  imports: [ProfileSection],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

}
