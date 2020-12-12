import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTelivisionComponent } from './dialog-telivision.component';

describe('DialogTelivisionComponent', () => {
  let component: DialogTelivisionComponent;
  let fixture: ComponentFixture<DialogTelivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTelivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTelivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
