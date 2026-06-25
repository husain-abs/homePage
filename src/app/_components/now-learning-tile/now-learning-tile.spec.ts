import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowLearningTile } from './now-learning-tile';

describe('NowLearningTile', () => {
  let component: NowLearningTile;
  let fixture: ComponentFixture<NowLearningTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowLearningTile],
    }).compileComponents();

    fixture = TestBed.createComponent(NowLearningTile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
