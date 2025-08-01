import { Component } from '@angular/core';
import { TechEntry } from './tech-entry/tech-entry';
import { TabsModule } from 'primeng/tabs';
import { DatabasesSkillsCollection, FrameworksSkillsCollection, ProgrammingSkillsCollection, TechTabs, ToolsSkillsCollection } from './technical-skills.model';

@Component({
  selector: 'app-technical-skills',
  imports: [TechEntry, TabsModule],
  templateUrl: './technical-skills.html',
  styleUrls: ['./technical-skills.css', '../shared/shared.css'],
})
export class TechnicalSkills {
  programmingSkills = ProgrammingSkillsCollection;
  frameworkSkills = FrameworksSkillsCollection;
  databaseSkills = DatabasesSkillsCollection;
  toolsSkills = ToolsSkillsCollection;
  tabs = TechTabs;
}
