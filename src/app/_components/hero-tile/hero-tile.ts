import { Component } from '@angular/core';
import { Chip } from "../_reusable/chip/chip";

@Component({
  selector: 'app-hero-tile',
  imports: [Chip],
  templateUrl: './hero-tile.html',
  styleUrl: './hero-tile.css',
  host: {
    'class': 'block h-full'
  }
})
export class HeroTile {}
