import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubActivityTile } from './github-activity-tile';

describe('GithubActivityTile', () => {
  let component: GithubActivityTile;
  let fixture: ComponentFixture<GithubActivityTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubActivityTile],
    }).compileComponents();

    fixture = TestBed.createComponent(GithubActivityTile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
