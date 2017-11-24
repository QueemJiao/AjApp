import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReneeComponent } from './renee.component';

describe('ReneeComponent', () => {
  let component: ReneeComponent;
  let fixture: ComponentFixture<ReneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
