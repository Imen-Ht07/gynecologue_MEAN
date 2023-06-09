import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocServiceComponent } from './doc-service.component';

describe('DocServiceComponent', () => {
  let component: DocServiceComponent;
  let fixture: ComponentFixture<DocServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
