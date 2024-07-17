import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForsComponent } from './ng-fors.component';

describe('NgForsComponent', () => {
  let component: NgForsComponent;
  let fixture: ComponentFixture<NgForsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgForsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
