import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMobilesComponent } from './dialog-mobiles.component';

describe('DialogMobilesComponent', () => {
  let component: DialogMobilesComponent;
  let fixture: ComponentFixture<DialogMobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMobilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
