import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCollumComponent } from './two-collum.component';

describe('TwoCollumComponent', () => {
  let component: TwoCollumComponent;
  let fixture: ComponentFixture<TwoCollumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoCollumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoCollumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
