import { Component } from '@angular/core';
import { HeroTile } from "../hero-tile/hero-tile";
import { ProjectsTile } from "../projects-tile/projects-tile";

@Component({
  selector: 'app-bento-grid',
  imports: [HeroTile, ProjectsTile],
  templateUrl: './bento-grid.html',
  styleUrl: './bento-grid.css',
})
export class BentoGrid {}
