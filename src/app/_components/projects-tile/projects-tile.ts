import { Component } from '@angular/core';
import { Chip } from "../_reusable/chip/chip";
import { ProjectRow } from "../_reusable/project-row/project-row";
import { Project } from '../../_data/models';

@Component({
  selector: 'app-projects-tile',
  imports: [Chip, ProjectRow],
  templateUrl: './projects-tile.html',
  styleUrl: './projects-tile.css',
  host: {
    'class': 'block h-full' 
  }
})
export class ProjectsTile {
  readonly dotColors = ['#7eb8f7', '#a78bfa', '#5dcaa5', '#e8a060'];
  projects: Project[] = [
    {displayType: 'writeup', title: "title1", subtitle: "sub1"},
    {displayType: 'writeup', title: "title1", subtitle: "sub1"},
    {displayType: 'writeup', title: "title1", subtitle: "sub1"},


  ]
}
