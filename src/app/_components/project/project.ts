import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  @Input() displayType: 'writeup' | 'demo' = 'writeup';
}
