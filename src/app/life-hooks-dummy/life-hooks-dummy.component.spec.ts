import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHooksDummyComponent } from './life-hooks-dummy.component';

describe('LifeHooksDummyComponent', () => {
  let component: LifeHooksDummyComponent;
  let fixture: ComponentFixture<LifeHooksDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeHooksDummyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeHooksDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
