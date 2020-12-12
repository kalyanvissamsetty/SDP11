import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHeadphonesComponent } from './dialog-headphones.component';

describe('DialogHeadphonesComponent', () => {
  let component: DialogHeadphonesComponent;
  let fixture: ComponentFixture<DialogHeadphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHeadphonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
