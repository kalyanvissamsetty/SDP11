import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeappliancesComponent } from './homeappliances.component';

describe('HomeappliancesComponent', () => {
  let component: HomeappliancesComponent;
  let fixture: ComponentFixture<HomeappliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeappliancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeappliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
