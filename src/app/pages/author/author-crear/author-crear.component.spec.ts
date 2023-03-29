import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCrearComponent } from './author-crear.component';

describe('AuthorCrearComponent', () => {
  let component: AuthorCrearComponent;
  let fixture: ComponentFixture<AuthorCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
