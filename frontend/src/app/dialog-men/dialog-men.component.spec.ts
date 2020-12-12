import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMenComponent } from './dialog-men.component';

describe('DialogMenComponent', () => {
  let component: DialogMenComponent;
  let fixture: ComponentFixture<DialogMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
