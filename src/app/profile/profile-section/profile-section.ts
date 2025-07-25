import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-section',
  imports: [CommonModule],
  templateUrl: './profile-section.html',
  styleUrl: './profile-section.css'
})
export class ProfileSection {
  sectionTitle = input<string>();


}
