import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogToysComponent } from './dialog-toys.component';

describe('DialogToysComponent', () => {
  let component: DialogToysComponent;
  let fixture: ComponentFixture<DialogToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogToysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
