import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTeddyComponent } from './dialog-teddy.component';

describe('DialogTeddyComponent', () => {
  let component: DialogTeddyComponent;
  let fixture: ComponentFixture<DialogTeddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTeddyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTeddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
