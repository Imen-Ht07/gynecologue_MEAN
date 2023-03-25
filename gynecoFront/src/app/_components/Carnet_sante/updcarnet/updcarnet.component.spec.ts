import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdcarnetComponent } from './updcarnet.component';

describe('UpdcarnetComponent', () => {
  let component: UpdcarnetComponent;
  let fixture: ComponentFixture<UpdcarnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdcarnetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdcarnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
