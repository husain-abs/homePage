import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTile } from './projects-tile';

describe('ProjectsTile', () => {
  let component: ProjectsTile;
  let fixture: ComponentFixture<ProjectsTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsTile],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsTile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
