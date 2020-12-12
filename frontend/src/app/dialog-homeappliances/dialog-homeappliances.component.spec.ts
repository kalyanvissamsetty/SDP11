import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHomeappliancesComponent } from './dialog-homeappliances.component';

describe('DialogHomeappliancesComponent', () => {
  let component: DialogHomeappliancesComponent;
  let fixture: ComponentFixture<DialogHomeappliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHomeappliancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHomeappliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
