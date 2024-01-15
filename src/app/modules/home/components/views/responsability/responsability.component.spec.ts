import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsabilityComponent } from './responsability.component';

describe('ResponsabilityComponent', () => {
  let component: ResponsabilityComponent;
  let fixture: ComponentFixture<ResponsabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponsabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponsabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
