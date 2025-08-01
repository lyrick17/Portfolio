import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-entry',
  imports: [],
  templateUrl: './tech-entry.html',
  styleUrl: './tech-entry.css'
})
export class TechEntry {
  techStackImage = input.required<string>();
  techStackName = input.required<string>();
}
