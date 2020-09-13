import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmlistComponent } from './algorithmlist.component';

describe('AlgorithmlistComponent', () => {
  let component: AlgorithmlistComponent;
  let fixture: ComponentFixture<AlgorithmlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
