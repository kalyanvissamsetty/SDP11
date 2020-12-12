import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLaptopsComponent } from './dialog-laptops.component';

describe('DialogLaptopsComponent', () => {
  let component: DialogLaptopsComponent;
  let fixture: ComponentFixture<DialogLaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLaptopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
