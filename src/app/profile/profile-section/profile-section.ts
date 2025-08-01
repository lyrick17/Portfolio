import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-section',
  imports: [CommonModule],
  templateUrl: './profile-section.html',
  styleUrls: ['./profile-section.css', '../../shared/shared.css'],
})
export class ProfileSection {
  sectionTitle = input<string>();
  id = input<string>();
  classList = input<string>();


}
