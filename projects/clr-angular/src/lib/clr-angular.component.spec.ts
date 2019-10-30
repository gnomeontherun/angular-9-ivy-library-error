import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrAngularComponent } from './clr-angular.component';

describe('ClrAngularComponent', () => {
  let component: ClrAngularComponent;
  let fixture: ComponentFixture<ClrAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClrAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClrAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
