import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCollumStyleableComponent } from './two-collum-styleable.component';

describe('TwoCollumStyleableComponent', () => {
  let component: TwoCollumStyleableComponent;
  let fixture: ComponentFixture<TwoCollumStyleableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoCollumStyleableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoCollumStyleableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
