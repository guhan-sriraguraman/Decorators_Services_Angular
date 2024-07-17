import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoployeeComponent } from './emoployee.component';

describe('EmoployeeComponent', () => {
  let component: EmoployeeComponent;
  let fixture: ComponentFixture<EmoployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmoployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmoployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
