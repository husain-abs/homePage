import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertsTile } from './certs-tile';

describe('CertsTile', () => {
  let component: CertsTile;
  let fixture: ComponentFixture<CertsTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertsTile],
    }).compileComponents();

    fixture = TestBed.createComponent(CertsTile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
