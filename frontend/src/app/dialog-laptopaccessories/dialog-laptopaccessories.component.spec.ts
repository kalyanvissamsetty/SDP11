import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLaptopaccessoriesComponent } from './dialog-laptopaccessories.component';

describe('DialogLaptopaccessoriesComponent', () => {
  let component: DialogLaptopaccessoriesComponent;
  let fixture: ComponentFixture<DialogLaptopaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLaptopaccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLaptopaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
