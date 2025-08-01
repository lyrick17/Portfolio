import { Component, input } from '@angular/core';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-work-experience',
  imports: [Card],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css'
})
export class WorkExperience {
  companyImage = input<string>();
  companyName = input.required<string>();
  position = input.required<string>();
  startDate = input.required<string>();
  endDate = input.required<string>();
}
