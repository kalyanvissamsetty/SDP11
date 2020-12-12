import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSpeakersComponent } from './dialog-speakers.component';

describe('DialogSpeakersComponent', () => {
  let component: DialogSpeakersComponent;
  let fixture: ComponentFixture<DialogSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSpeakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
