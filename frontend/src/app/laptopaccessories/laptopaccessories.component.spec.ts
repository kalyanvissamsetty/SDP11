import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopaccessoriesComponent } from './laptopaccessories.component';

describe('LaptopaccessoriesComponent', () => {
  let component: LaptopaccessoriesComponent;
  let fixture: ComponentFixture<LaptopaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopaccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
