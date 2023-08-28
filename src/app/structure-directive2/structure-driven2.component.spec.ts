import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDriven2Component } from './structure-driven2.component';

describe('StructureDriven2Component', () => {
  let component: StructureDriven2Component;
  let fixture: ComponentFixture<StructureDriven2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructureDriven2Component]
    });
    fixture = TestBed.createComponent(StructureDriven2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
