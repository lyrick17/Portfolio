import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContentEntry } from './project-content-entry';

describe('ProjectContentEntry', () => {
  let component: ProjectContentEntry;
  let fixture: ComponentFixture<ProjectContentEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectContentEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectContentEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
