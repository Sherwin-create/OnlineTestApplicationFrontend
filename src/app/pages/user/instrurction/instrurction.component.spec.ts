import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrurctionComponent } from './instrurction.component';

describe('InstrurctionComponent', () => {
  let component: InstrurctionComponent;
  let fixture: ComponentFixture<InstrurctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrurctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrurctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
