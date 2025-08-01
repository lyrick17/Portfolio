import { Component, effect, inject, input, signal } from '@angular/core';
import { Project } from '../projects.model';
import { ProjectsService } from '../projects.service';
import { MarkdownComponent } from "ngx-markdown";
import { debounceTime, fromEvent, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-project-content-entry',
  imports: [MarkdownComponent, GalleriaModule],
  templateUrl: './project-content-entry.html',
  styleUrl: './project-content-entry.css',
})
export class ProjectContentEntry {
  selectedProject = input.required<Project>();

  projectService = inject(ProjectsService);
  viewportWidth = signal(window.innerWidth);

  showSkillName = signal(true);

  constructor() {

    // Resize event handling using RxJS for Anchor Scrolling
    const resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth)
      );

    const widthSignal = toSignal(resize$, { initialValue: window.innerWidth });
    effect(() => {
      const width = widthSignal();
        // Change the header size based on the viewport size
      this.updateShowSkillName(width);
    });

  }

  updateShowSkillName(width: number) {
    this.showSkillName.set(width >= 768);
  }
}
