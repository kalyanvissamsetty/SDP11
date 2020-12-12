import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSportsComponent } from './dialog-sports.component';

describe('DialogSportsComponent', () => {
  let component: DialogSportsComponent;
  let fixture: ComponentFixture<DialogSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
