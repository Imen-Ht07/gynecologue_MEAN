import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarnetComponent } from './view-carnet.component';

describe('ViewCarnetComponent', () => {
  let component: ViewCarnetComponent;
  let fixture: ComponentFixture<ViewCarnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCarnetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCarnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
