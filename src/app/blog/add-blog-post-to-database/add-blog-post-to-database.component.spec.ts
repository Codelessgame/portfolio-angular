import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AddBlogPostToDatabaseComponent } from './add-blog-post-to-database.component';

describe('AddBlogPostToDatabaseComponent', () => {
  let component: AddBlogPostToDatabaseComponent;
  let fixture: ComponentFixture<AddBlogPostToDatabaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlogPostToDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
