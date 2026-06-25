import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackTile } from './stack-tile';

describe('StackTile', () => {
  let component: StackTile;
  let fixture: ComponentFixture<StackTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackTile],
    }).compileComponents();

    fixture = TestBed.createComponent(StackTile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
