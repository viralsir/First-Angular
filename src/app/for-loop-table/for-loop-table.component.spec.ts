import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopTableComponent } from './for-loop-table.component';

describe('ForLoopTableComponent', () => {
  let component: ForLoopTableComponent;
  let fixture: ComponentFixture<ForLoopTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForLoopTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForLoopTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
