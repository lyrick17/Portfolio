import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNavEntry } from './project-nav-entry';

describe('ProjectNavEntry', () => {
  let component: ProjectNavEntry;
  let fixture: ComponentFixture<ProjectNavEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectNavEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectNavEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
