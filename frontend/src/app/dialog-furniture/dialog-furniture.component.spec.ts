import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFurnitureComponent } from './dialog-furniture.component';

describe('DialogFurnitureComponent', () => {
  let component: DialogFurnitureComponent;
  let fixture: ComponentFixture<DialogFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFurnitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
