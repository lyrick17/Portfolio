import { Component, input } from '@angular/core';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-education',
  imports: [Card],
  templateUrl: './education.html',
  styleUrls: ['./education.css', '../shared/shared.css' ]
})
export class Education {
  schoolImage = input<string>();
  schoolName = input.required<string>();
  program = input.required<string>();
  status = input.required<string>();
}
