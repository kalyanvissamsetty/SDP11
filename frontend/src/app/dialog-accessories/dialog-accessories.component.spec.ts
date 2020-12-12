import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAccessoriesComponent } from './dialog-accessories.component';

describe('DialogAccessoriesComponent', () => {
  let component: DialogAccessoriesComponent;
  let fixture: ComponentFixture<DialogAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
