import { Component, inject } from '@angular/core';
import { ProjectNavEntry } from "./project-nav-entry/project-nav-entry";
import { FeaturedProjects } from './projects.model';
import { ProjectsService } from './projects.service';
import { ProjectContentEntry } from "./project-content-entry/project-content-entry";

@Component({
  selector: 'app-projects',
  imports: [ProjectNavEntry, ProjectContentEntry],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projectService = inject(ProjectsService);

  onProjectSelected(project: any) {
    this.projectService.selectProject(project.id);
    // Additional logic for handling project selection can be added here
  }
}
