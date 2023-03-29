import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraCrearComponent } from './obra-crear.component';

describe('ObraCrearComponent', () => {
  let component: ObraCrearComponent;
  let fixture: ComponentFixture<ObraCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObraCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
