import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwoWayComponent } from './nwo-way.component';

describe('NwoWayComponent', () => {
  let component: NwoWayComponent;
  let fixture: ComponentFixture<NwoWayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [NwoWayComponent]
});
    fixture = TestBed.createComponent(NwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
