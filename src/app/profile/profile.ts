import { Component } from '@angular/core';
import { ProfileSection } from "./profile-section/profile-section";
import { TechnicalSkills } from "../technical-skills/technical-skills";
import { Education } from "../education/education";
import { WorkExperience } from "../work-experience/work-experience";
import { Certifications } from "../certifications/certifications";
import { Projects } from "../projects/projects";

@Component({
  selector: 'app-profile',
  imports: [ProfileSection, TechnicalSkills, Education, WorkExperience, Certifications, Projects],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css', '../shared/shared.css'],
})
export class Profile {

}
