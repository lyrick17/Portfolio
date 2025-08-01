import { Component, input, output } from '@angular/core';
import { Project } from '../projects.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-nav-entry',
  imports: [CommonModule],
  templateUrl: './project-nav-entry.html',
  styleUrls: ['./project-nav-entry.css', '../../shared/shared.css'],
})
export class ProjectNavEntry {
  project = input.required<Project>();
  onClick = output<Project>();
  isSelected = input<boolean>(false);

  onProjectClick() {
    this.onClick.emit(this.project());
  }
}
