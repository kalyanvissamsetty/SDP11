import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMousesComponent } from './dialog-mouses.component';

describe('DialogMousesComponent', () => {
  let component: DialogMousesComponent;
  let fixture: ComponentFixture<DialogMousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
