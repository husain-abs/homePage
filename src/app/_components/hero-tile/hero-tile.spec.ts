import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTile } from './hero-tile';

describe('HeroTile', () => {
  let component: HeroTile;
  let fixture: ComponentFixture<HeroTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroTile],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroTile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
