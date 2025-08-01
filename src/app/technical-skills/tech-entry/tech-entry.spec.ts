import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechEntry } from './tech-entry';

describe('TechEntry', () => {
  let component: TechEntry;
  let fixture: ComponentFixture<TechEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
