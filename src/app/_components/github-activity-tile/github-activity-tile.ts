import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-github-activity-tile',
  imports: [],
  templateUrl: './github-activity-tile.html',
  styleUrl: './github-activity-tile.css',
})
export class GithubActivityTile {
    private http = inject(HttpClient);
  contributions = toSignal(
    this.http.get(`https://github-contributions-api.jogruber.de/v4/husain-abs`)
  );
}
