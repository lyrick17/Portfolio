import { Injectable } from "@angular/core";
import { FeaturedProjects } from "./projects.model";
import { TechSkillsCollection } from "../technical-skills/technical-skills.model";

// this is now injectable
@Injectable({providedIn: 'root'})
export class ProjectsService {
    private projects = FeaturedProjects;
    private techSkillCollection = TechSkillsCollection;

    private selectedProject = this.projects[0]; // default selected project

    getProjects() {
        return this.projects;
    }

    getSelectedProject() {
        return this.selectedProject;
    }

    isProjectSelected(id: string) {
        return this.selectedProject.id === id;
    }

    getProjectById(id: string) {
        return this.projects.find(project => project.id === id);
    }

    selectProject(id: string) {
        const project = this.getProjectById(id);
        if (project) {
            this.selectedProject = project;
            console.log(`Selected project: ${project.name}`);
        }
    }

    getTechSkillImage(techSkillId: string): string {
        const image = this.techSkillCollection.find(skill => skill.id === techSkillId);
        return image ? image.image : '';
    }

    getTechSkillName(techSkillId: string): string {
        const skill = this.techSkillCollection.find(skill => skill.id === techSkillId);
        return skill ? skill.name : '';
    }
}