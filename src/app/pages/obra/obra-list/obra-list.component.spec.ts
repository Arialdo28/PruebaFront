import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraListComponent } from './obra-list.component';

describe('ObraListComponent', () => {
  let component: ObraListComponent;
  let fixture: ComponentFixture<ObraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObraListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
